import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex('projects').del()
        .then(() => {
            // Inserts seed entries
            return knex('projects').insert([
                { id: 1,
                  project_name: 'Emerald Citizen',
                  org_url: 'https://emeraldcitizen.org/',
                  po_name: 'Scott Lively',
                  po_email: 'scott@mvpstudio.org',
                  description: 'Scott\'s cool open source React Magic',
                  description_link: 'https://www.us-ignite.org/apps/emerald-citizen/',
                  status: 1,
                 },
                { id: 2,
                  project_name: 'MVP Studio',
                  org_url: 'https://mvpstudio.org/',
                  po_name: 'Scott Lively',
                  po_email: 'scott@mvpstudio.org',
                  description: 'We help visionaries build their vision',
                  description_link: 'https://mvpstudio.org/',
                  status: 1,
                },
                { id: 3,
                  project_name: 'Test Project',
                  org_url: 'https://google.org/',
                  po_name: 'Test Name',
                  po_email: 'test@test.org',
                  description: 'This is a test project description.',
                  description_link: 'https://google.org/',
                  status: 0,
                },
            ]);
        });
}
