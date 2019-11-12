import { logger } from '../logger';
import { destroyClientAndExit, setupConnectionConfig, setupDbClient } from './setupClient';

export const createDatabase = async () => {
    logger.info(`Creating database ${setupConnectionConfig.database}.`);
    await setupDbClient.raw(`CREATE DATABASE ${setupConnectionConfig.database}`)
        .then(
            () => logger.info('Database created.'),
            (e: Error) => {
                if (e.message.indexOf('already exists') === -1) {
                    logger.error('Could not create database.', e);
                    throw new Error('Could not create database!');
                } else {
                    logger.info('Database already created.');
                }
            },
        );
};

if (require.main === module) {
    createDatabase()
        .catch(destroyClientAndExit)
        .then(destroyClientAndExit);
}
