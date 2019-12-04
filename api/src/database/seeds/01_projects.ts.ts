import * as Knex from 'knex';
import faker from 'faker';

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const createFakeProject = () => ({
    project_name: faker.company.companyName(),
    org_url: faker.internet.url(),
    po_name: faker.name.findName(),
    po_email: faker.internet.email(),
    description: faker.lorem.paragraph(),
    description_link: faker.internet.url(),
    status: getRandomInt(3),
});

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex('projects').del()
        .then(() => {
            const fakeProjects = [];
            const projectPoolSize = 50;
            for (let i = 0; i < projectPoolSize; i++) {
                fakeProjects.push(createFakeProject());
            }
            // Inserts seed entries
            return knex('projects').insert(fakeProjects);
        });
}
