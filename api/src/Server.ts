import express from 'express';
import { Request, Response } from 'express';

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
    res.sendStatus(200);
});

app.get('/project/:projectID', (req: Request, res: Response) => {
    res.send('Return project info');
});

app.post('/project', (req: Request, res: Response) => {
    res.send('Add a new project to the database');
});

app.put('/project/:projectID', (req: Request, res: Response) => {
    res.send('Update and existing project');
});

app.delete('/project/:projectID', (req: Request, res: Response) => {
    res.send('Delete and existing project');
});

app.get('/projects', (req: Request, res: Response) => {
    res.send('Return list of all projects');
});

app.post('/volunteer', (req: Request, res: Response) => {
    res.send('Send volunteer info to project owner');
});

// Export express instance
export default app;
