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

// Export express instance
export default app;
