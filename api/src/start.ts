import app from './Server';
import { config } from './config/config';
import { getDbClientInstance } from './database/dbClient';
import { createDatabase } from './database/createDatabase';
import { childLogger } from './config/logger';
const logger = childLogger('start');

export const runServer = async () => {
    // Create database
    await createDatabase();

    // Database migrations
    const dbClient = getDbClientInstance();
    logger.info(`Migrating database ${config.database.connection.database}.`);
    await dbClient.migrate.latest();
    const currentVersion: string = await dbClient.migrate.currentVersion();
    logger.info(`Migrated to version ${currentVersion}.`);

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
