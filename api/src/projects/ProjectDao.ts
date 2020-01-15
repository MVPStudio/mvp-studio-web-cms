import Knex = require('knex');
import { getDbClientInstance } from '../database/dbClient';

export default class ProjectDao {
    constructor(private db: Knex) {}
    public getAllProjects = async () => await this.db.select().from('projects');
}
