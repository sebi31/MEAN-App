import { Strategy, StrategyOptions, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { secret } from '../config/database';
import { getUserById } from '../models/user';
import { PassportStatic, Authenticator } from 'passport';

// export default function(passport) {
//     const options: StrategyOptions = {
//         jwtFromRequest: ExtractJwt.fromAuthHeader(),
//         secretOrKey: secret,
//     };

//     passport.use(new Strategy(options, (payload: any, done: VerifiedCallback) => {
//         getUserById(payload.sub, (err, user) => {
//             if (err) {
//                 return done(err, null);
//             }
//             if (user) {
//                 return done(null, user);
//             }
//             else {
//                 return done(null, null);
//             }
//         })
//     }));
// }