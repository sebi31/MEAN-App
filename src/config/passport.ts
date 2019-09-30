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
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}
