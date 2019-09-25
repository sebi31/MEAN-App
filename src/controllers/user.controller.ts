import express, { Request, Response, NextFunction, Router } from 'express';
import { get, getUserById, getUserByUsername, createUser, IUser, User, comparePassword } from '../models/user';
import { sign, SignOptions } from 'jsonwebtoken';
import { secret } from '../config/database';
import { authenticate } from 'passport';

const router: Router = express.Router();

router.get('', (req: Request, res: Response, next: NextFunction) => {
  get((err: any, users: Array<IUser>) => {
    if (err) {
      res.send(err);
    }
    else {
      res.json(users);
    }
  });
});


router.get('/byusername/:username', (req: Request, res: Response, next: NextFunction) => {
  getUserByUsername(req.params.username, (err: any, user: IUser | null) =>{
    if(err){
        res.send(err);
    }
    else{
        res.json(user);
    }
  });
});

router.get('/profile', authenticate('jwt', { session: false }), (req: Request, res: Response, next: NextFunction) => {
  res.json({
    success: true,
    user: req.user
  });
});

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  createUser(user, (err: any, user: IUser) => {
    if(err) {
      res.json({ success: 'false', message: 'Failed to register user' });
    }
    else {
      res.json({ success: 'true', message: 'User registered' });
    }
  });
});

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  const username = req.body.username;
  const password = req.body.password;

  getUserByUsername(username, (err: any, user: IUser | null) => {
    if (err) {
      throw err;
    }
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    comparePassword(password, user.password, (err: Error | null, isMatch: boolean) => {
      if (err) throw err;

      if (isMatch) {
        const signOptions: SignOptions = {
          expiresIn: 3600
        };
        const token = sign(user, secret, signOptions);

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: user
        });
      }
      else {
        return res.json({ success: false, message: 'Wrong password' });
      }
    })
  });
});

export default router;