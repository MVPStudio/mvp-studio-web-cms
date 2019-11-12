import app from './Server';
import { config } from '../config';
import { getDbClientInstance } from './database/dbClient';
import { createDatabase } from './database/createDatabase';
import { childLogger } from '../logger';
const logger = childLogger('start');

export const runServer = async () => {
    // Create database
    await createDatabase();

    // Database migrations
    const dbClient = getDbClientInstance();
    logger.info(`Migrating database ${config.database.connection.database}.`);
    await dbClient.migrate.latest();
    logger.info(`Migrated to version ${await dbClient.migrate.currentVersion()}.`);

    // Start the server
    const port = config.serverPort;
    await new Promise((resolve) => {
        app.listen(port, () => {
            logger.info('Express server started on port: ' + port);
            resolve();
        });
    });
};

if (require.main === module) {
    runServer();
}
