import app from './Server';
import { config } from './config';
import { getDbClientInstance } from './database/dbClient';
import { createDatabase } from './database/createDatabase';
import { childLogger } from './logger';
const logger = childLogger('start');

export const runServer = async () => {
    // Create database
    await createDatabase();
    // Database client
    const dbClient = getDbClientInstance();

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
