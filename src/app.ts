import express, { Application, Router, Response, NextFunction, Request } from 'express';
import cors from 'cors';
import userController from './controllers/user.controller';

const port = 3000;
const app: Application = express();
const router: Router = express.Router();

app.use(cors());
app.use(express.json());
app.use('/api', router);
router.use('/user', userController);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('main API route');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})