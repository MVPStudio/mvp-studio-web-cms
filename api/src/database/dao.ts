import Knex from 'knex';

const getAllProjects = async (dbClient: Knex) => await dbClient.select().from('projects');

export default {getAllProjects};
