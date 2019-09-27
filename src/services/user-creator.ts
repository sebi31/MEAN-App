import { IUser } from '../models/user';
import passwordHasher from './password-hasher';

class UserCreator {
  public createUser(user: IUser, callback: (err: any, res: IUser) => void) {
    user.password = passwordHasher.hashPassword(user.password);
    user.save(callback);
  }
}

export default new UserCreator();
