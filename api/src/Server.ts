import express from 'express';
import { Request, Response } from 'express';
import { getDbClientInstance } from './database/dbClient';
import ProjectService from './projects/ProjectService';
import ProjectDao from './projects/ProjectDao';

// Init express
const app = express();
const service = new ProjectService(new ProjectDao(getDbClientInstance()));
// Add middleware/settings/routes to express.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api', (req: Request, res: Response) => {
    res.sendStatus(200);
});

app.get('/api/project/:projectID', (req: Request, res: Response) => {
    service.getProject(req.params.projectID).then((data) => res.json(data));
});

app.post('/api/project', (req: Request, res: Response) => {
    res.send('Add a new project to the database');
});

app.put('/api/project/:projectID', (req: Request, res: Response) => {
    res.send('Update and existing project');
});

app.delete('/api/project/:projectID', (req: Request, res: Response) => {
    res.send('Delete and existing project');
});

app.get('/api/projects', (req: Request, res: Response) => {
    service.getAllProjects().then((data) => res.json(data));
});

app.post('/api/volunteer', (req: Request, res: Response) => {
    res.send('Send volunteer info to project owner');
});

// Export express instance
export default app;
