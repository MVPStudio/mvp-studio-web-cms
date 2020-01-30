import ProjectDao from './ProjectDao';

// Type interface for Projects and Interfaces
export interface Project {
  project_name: string;
  po_name: string;
  po_email: string;
  description: string;
  description_link: string;
  org_url: string;
  logo_link: string;
  status: number;
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

export default class ProjectService {
    constructor(private dao: ProjectDao) {}
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
    public async addProject(project: Project) {
      const data = {
        statusCode: 200,
        message: 'Thank you for your interest!',
      };
      await this.dao.addProject(project); // insert project
      return data;
    }
    public async sendVolunteer(volunteer: Volunteer) {
      const data = {
        statusCode: 200,
        message: 'Thank you for your interest!',
      };
      // email will be sent in here
      return data;
    }
  }
