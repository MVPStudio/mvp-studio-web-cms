import app from './Server';
import { config } from './config';
import { childLogger } from './logger';
const logger = childLogger('start');

// Start the server
const port = config.serverPort;
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});
