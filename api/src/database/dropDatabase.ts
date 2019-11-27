import { logger } from '../config/logger';
import { destroyClientAndExit, setupConnectionConfig, setupDbClient } from './setupClient';

export const dropDatabase = async () => {
    logger.info(`Dropping database ${setupConnectionConfig.database}.`);
    try {
        await setupDbClient.raw(`DROP DATABASE ${setupConnectionConfig.database}`);
        logger.info('Database dropped.');
    } catch (e) {
            if (e.message.indexOf('does not exist') === -1) {
                logger.error('Could not drop database.', e);
                throw new Error(`Could not drop database. ${e}`);
            } else {
                logger.info('Database already dropped.');
            }
    }
};

if (require.main === module) {
    dropDatabase()
        .catch(destroyClientAndExit)
        .then(destroyClientAndExit);
}
