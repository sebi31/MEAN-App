import express, { Application, Router, Response, NextFunction, Request } from 'express';
import { connect, connection } from 'mongoose';
import passport from 'passport';
import cors from 'cors';
import userController from './controllers/user.controller';
import { secret, mongoConnectionString } from './config/database';
import { getUserById } from '../src/models/user';
import { ExtractJwt, Strategy, StrategyOptions, VerifiedCallback } from 'passport-jwt';

connect(mongoConnectionString);

connection.on('connected', () => {
  console.log('Connected to database ' + mongoConnectionString);
});

connection.on('error', (err) => {
  console.log('Database error ' + err);
});

const port = 3000;
const app: Application = express();
const router: Router = express.Router();

// Middleware
app.use(cors());
app.use(express.json());
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
  console.log(`Server running on port ${port}`);
})

// Passport config
export function passportConfig() {
  console.log('passportConfig');

  const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: secret,
  };
  console.log('passportConfig');
  passport.use(new Strategy(options, (payload: any, done: VerifiedCallback) => {
    getUserById(payload.sub, (err, user) => {
      if (err) {
        console.log('error', err);
        return done(err, null);
      }
      if (user) {
        console.log('user', user);
        return done(null, user);
      }
      else {
        console.log('no user');
        return done(null, null);
      }
    })
  }));
}