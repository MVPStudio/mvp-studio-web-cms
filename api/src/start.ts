import app from './Server';

// Start the server
const port = Number(process.env.PORT || 8000);
app.listen(port, () => {
    // tslint:disable-next-line no-console
    console.info('Express server started on port: ' + port);
});
