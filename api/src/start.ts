import app from './Server';
import { config } from './config';

// Start the server
const port = config.serverPort;
app.listen(port, () => {
    // tslint:disable-next-line no-console
    console.info('Express server started on port: ' + port);
});
