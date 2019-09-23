import { Strategy, StrategyOptions, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import config from '../config/database';
import * as passport from 'passport';
import { getUserById } from '../controllers/models/user';

export default function() {
    const options: StrategyOptions = {
        jwtFromRequest: ExtractJwt.fromAuthHeader(),
        secretOrKey: config.secret,
    };

    passport.use(new Strategy(options, (payload: any, done: VerifiedCallback) => {
        getUserById(payload.sub, (err, user) => {
            if (err) {
                return done(err, null);
            }
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, null);
            }
        })
    }));

    

}