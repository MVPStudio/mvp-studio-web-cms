import { config } from '../../config/config';
import Knex from 'knex';
import { ConnectionConfig } from 'knex';

// Connect to default postgres database in order to create/drop the database.
export const setupConnectionConfig = config.database.connection as ConnectionConfig;
export const setupDbClient = Knex({
    ...config.database,
    connection: {
        ...setupConnectionConfig,
        database: 'postgres',
    },
});
export const destroyClientAndExit = () => Promise.resolve(setupDbClient.destroy().finally(() => process.exit()));
