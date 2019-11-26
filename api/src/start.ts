import app from './Server';
import { config } from './config';
import { logger } from './logger';
import { getDbClientInstance } from './database/dbClient';
import { createDatabase } from './database/createDatabase';

export const runServer = async () => {
    // Create database
    await createDatabase();
    // Database client
    const dbClient = getDbClientInstance();

    // Start the server
    const port = config.serverPort;
    app.listen(port, () => {
        logger.info('Express server started on port: ' + port);
    });
};

if (require.main === module) {
    runServer();
}
