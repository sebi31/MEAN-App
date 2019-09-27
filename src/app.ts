import express, { Application, Router, Response, NextFunction, Request } from 'express';
import { connect, connection } from 'mongoose';
import passport from 'passport';
import cors from 'cors';
import userController from './controllers/user-controller';
import { mongoConnectionString } from './config/database';
import { passportConfig } from './config/passport';

connect(mongoConnectionString, { useNewUrlParser: true });

connection.on('connected', () => {
  // tslint:disable-next-line:no-console
  console.log('Connected to database ' + mongoConnectionString);
});

connection.on('error', (err) => {
  // tslint:disable-next-line:no-console
  console.log('Database error ' + err);
});

const port = 3000;
const app: Application = express();
const router: Router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

// API routes
app.use('/api', router);
router.use('/user', userController);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('main API route');
});

// Start server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server running on port ${port}`);
});
