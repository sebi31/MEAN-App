import { genSalt, hash } from 'bcryptjs';
import { IUser } from '../models/user';

class UserCreator {
  public createUser(user: IUser, callback: (err: any, res: IUser) => void) {
    genSalt(10, (err: Error, salt: string) => {
      hash(user.password, salt, (err: Error, hash: string) => {
        if (err) {
          throw err;
        }
        user.password = hash;
        user.save(callback);
      });
    });
  }
}

export default new UserCreator();
