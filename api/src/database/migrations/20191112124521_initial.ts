import * as Knex from 'knex';

const _MAX_URL_LENGTH: number = 2083; /* Reasoning: https://stackoverflow.com/a/41633960 */
const _MAX_NAME_LENGTH: number = 256;
const _MAX_DESCRIPTION_LENGTH: number = 512;

export async function up(knex: Knex): Promise<any> {
    await knex.schema.createTable('projects', (table) => {
        table.increments();
        table.timestamps(true, true); /* Adds created_at and updated_at columns to db, auto updates*/
        table.string('project_name', _MAX_NAME_LENGTH).notNullable();
        table.string('org_url', _MAX_URL_LENGTH);
        table.string('po_name', _MAX_NAME_LENGTH).notNullable();
        table.string('po_email', _MAX_NAME_LENGTH).notNullable();
        table.string('description', _MAX_DESCRIPTION_LENGTH).notNullable();
        table.string('description_link', _MAX_URL_LENGTH);
        table.integer('status').notNullable();
    });
}

export async function down(knex: Knex): Promise<any> {
    await knex.schema.dropTable('projects');
}
