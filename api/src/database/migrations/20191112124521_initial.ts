import * as Knex from 'knex';
export async function up(knex: Knex): Promise<any> {
    await knex.schema.createTable('projects', (table) => {
        table.uuid('id').primary();
        table.string('project_name', 256).notNullable();
        table.string('org_url', 2083);
        table.string('po_name', 128).notNullable();
        table.string('po_email', 256).notNullable();
        table.string('description', 512).notNullable();
        table.string('description_link', 2083);
        table.integer('status').notNullable();
    });
}

export async function down(knex: Knex): Promise<any> {
    await knex.schema.dropTable('projects');
}
