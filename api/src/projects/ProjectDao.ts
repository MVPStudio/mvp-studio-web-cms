import Knex = require('knex');
import { getDbClientInstance } from '../database/dbClient';

export default class ProjectDao {
    private db: Knex;
    constructor(db = getDbClientInstance()) {
       this.db = db;
    }
    public getAllProjects = async () => await this.db.select().from('projects');
}
