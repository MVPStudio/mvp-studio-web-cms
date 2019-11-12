import app from './Server';
import { config } from './config';
import { logger } from './logger';
import { getDbClientInstance } from './database/dbClient';

// Database client
const dbClient = getDbClientInstance();
// Start the server
const port = config.serverPort;
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});
