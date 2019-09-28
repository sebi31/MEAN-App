import { Strategy, StrategyOptions, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { secret } from '../config/database';
import { IUser } from '../models/user';
import userRetriever from '../services/user-retriever';
import passport from 'passport';

export function passportConfig() {
  const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
  };

  passport.use(new Strategy(options, (payload: any, done: VerifiedCallback) => {
    userRetriever.getUserById(payload.id, (err: any, user: IUser | null) => {
      console.log('payload', payload)
      if (err) {
        console.log('error');
        return done(err, false);
      }
      if (user) {
        console.log('user found');
        return done(null, user);
      } else {
        console.log('user not found');
        return done(null, false);
      }
    });
  }));
}
