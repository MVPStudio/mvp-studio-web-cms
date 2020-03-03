import ProjectDao from './ProjectDao';
import { config } from '../config/config';
import { pbkdf2, randomBytes } from 'crypto';
import { promisify } from 'util';
import SendGridEmailService from '../services/SendGridEmailService';

// Type interface for Projects and Interfaces
export interface Project {
  project_name: string; // The name of the project
  po_name: string; // The project owner's name
  po_email: string; // The project owner's email
  description: string; // Short project description
  description_link: string; // Link to a longer description
  org_url: string; // Link to the project org's site
  logo_link: string; // Link to project logo
  mvp_link: string; // MVP magic link
  po_link: string; // Project owner's magic link
  status: number; // The state of the project
  /** Status codes:
   *  0 = approved
   *  1 = started
   *  2 = finished
   *  3 = removed
   */
}
interface Volunteer {
    id: string;
    name: string;
    email: string;
    github: string;
    roleCategory?: string[];
    experienceCategory?: string[];
    whyText?: string;
}
interface MagicLinkObject {
  cipher: string;
  iterations: number;
  length: number;
  salt: string;
  hash: string;
}

const pbkdf2Promisified = promisify(pbkdf2);

export default class ProjectService {
    constructor(private dao: ProjectDao, private mailer: SendGridEmailService) {}
    public async getAllProjects() {
      return this.dao.getAllProjects();
    }
    public async getProject(id: string) {
      let result = {};
      // Check to make sure id is an integer
      const re = /^\d{1,5}$/;
      if (re.test(id)) {
        const data = await this.dao.getProject(id);
        if (data.length !== 0) {
          result = data[0]; // Return a single project
        }
      }
      return result;
    }
    public async addProject(project: Omit<Project, 'mvp_link,po_link'>) {
      const data = {
        statusCode: 200,
        message: 'Thank you for your interest!',
      };
      // Create magic links
      const mvpMagicLink = await randomBytes(16).toString('hex');
      const projectMagicLink = await randomBytes(16).toString('hex');
      // Insert project to db
      const dbReturn = await this.dao
        .addProject({
          ...project,
          mvp_link: await this.createMagicLinkForDatabase(mvpMagicLink),
          po_link: await this.createMagicLinkForDatabase(projectMagicLink),
          });
      const id = dbReturn.pop();
      // Send magic links to mvp and project owner
      this.sendProjectSubmissionEmail(id, projectMagicLink, mvpMagicLink, project);
      return data;
    }
    public async sendVolunteer(volunteer: Volunteer) {
      const data = {
        statusCode: 200,
        message: 'Thank you for your interest!',
      };
      this.sendVolunteerSubmissionEmail(volunteer);
      return data;
    }
    private async createMagicLinkForDatabase(magicLink: string) {
      const magicLinkObjectWithoutHash = {
        cipher: 'sha512',
        iterations: 300000,
        length: 64,
        salt: (await randomBytes(16)).toString('hex'),
      };
      const magicLinkObject: MagicLinkObject = {
        ...magicLinkObjectWithoutHash,
        hash: await this.createMagicLinkHash(magicLink, magicLinkObjectWithoutHash),
      };
      return JSON.stringify(magicLinkObject);
    }
    private async createMagicLinkHash(magicLink: string, { salt, iterations, length, cipher }: Omit<MagicLinkObject, 'hash'>) {
      return (await pbkdf2Promisified(magicLink, salt, iterations, length, cipher)).toString('hex');
    }
    private async verifyMagicLink(magicLink: string, stringifiedMagicLinkObject: string) {
      const magicLinkObject = JSON.parse(stringifiedMagicLinkObject) as MagicLinkObject;
      return magicLinkObject.hash === (await this.createMagicLinkHash(magicLink, magicLinkObject));
    }
    private sendProjectSubmissionEmail(id: number|undefined,
                                       projectMagicLink: string,
                                       mvpMagicLink: string,
                                       { project_name, po_name, po_email }: Project,
    ) {
      if (id) {
        const ownerEmail = {
          destAddress: po_email,
          subject: `${project_name} has been submitted`,
          msgBody: `Thank you for submitting ${project_name}! Link: /project/${id}/edit/${projectMagicLink}`,
        };
        const mvpEmail = {
          destAddress: config.emailSender,
          subject: `New Project: ${project_name}`,
          msgBody: `${project_name} submitted by ${po_name}. Link: /project/${id}/admin/${mvpMagicLink}`,
        };
        this.mailer.sendMail(ownerEmail);
        this.mailer.sendMail(mvpEmail);
      }
    }
    private async sendVolunteerSubmissionEmail(volunteer: Volunteer) {
      let project: Project = <Project> await this.getProject(volunteer.id);
      const email = {
        destAddress: project.po_email, // The project owner's email
        subject: `${volunteer.name} has volunteered to help on ${project.project_name}`,
        msgBody: `Volunteer Info:
                  Name: ${volunteer.name}
                  Email: ${volunteer.email}
                  Github Handle: ${volunteer.github}
                  Role: ${volunteer.roleCategory}
                  Experience: ${volunteer.experienceCategory}
                  Why they are interested: ${volunteer.whyText}`,
      }
      this.mailer.sendMail(email);
    }
  }
