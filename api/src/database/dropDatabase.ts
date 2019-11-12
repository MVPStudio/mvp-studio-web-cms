import { logger } from '../logger';
import { destroyClientAndExit, setupConnectionConfig, setupDbClient } from './setupClient';

export const dropDatabase = async () => {
    logger.info(`Dropping database ${setupConnectionConfig.database}.`);
    await setupDbClient.raw(`DROP DATABASE ${setupConnectionConfig.database}`)
        .then(
            () => logger.info('Database dropped.'),
            (e: Error) => {
                if (e.message.indexOf('does not exist') === -1) {
                    logger.error('Could not drop database.', e);
                } else {
                    logger.info('Database already dropped.');
                }
            },
        );
};

if (require.main === module) {
    dropDatabase()
        .catch(destroyClientAndExit)
        .then(destroyClientAndExit);
}
