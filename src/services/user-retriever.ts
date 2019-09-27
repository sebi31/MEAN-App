import { User, IUser } from '../models/user';

class UserRetriever {
  public get(callback: (err: any, res: Array<IUser>) => void) {
    User.find(callback);
  }
  public getUserById(id: any, callback: (err: any, res: IUser | null) => void) {
    User.findById(id, callback);
  }
  public getUserByUsername(username: string, callback: (err: any, res: IUser | null) => void) {
    const req = { username: username };
    User.findOne(req, callback);
  }
}

export default new UserRetriever();
