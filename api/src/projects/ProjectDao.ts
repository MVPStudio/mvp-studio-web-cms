import Knex = require('knex');
import { getDbClientInstance } from '../database/dbClient';
import { Project } from './ProjectService';

export default class ProjectDao {
    constructor(private db: Knex) {}
    public getAllProjects = async () => await this.db.select().from('projects');
    public getProject = async (id: string) => await this.db.select().from('projects').where('id', id);
    public addProject = async (project: Project) => await this.db('projects').returning('id').insert(project);
}
