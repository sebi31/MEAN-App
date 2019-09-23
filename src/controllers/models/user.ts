import { Schema, Model, Document, model } from 'mongoose';
import * as bcrypt from 'bcryptjs';

const UserSchema: Schema = new Schema({
  name: String,
  email: String,
  username: String,
  Password: String
});

export const User: Model<IUser> = model('User', UserSchema);

export interface IUser extends Document {
  name: string;
  email: string;
  username: string;
  password: string;
}

export function get(callback: (err: any, res: Array<IUser>) => void) {
  User.find(callback);
}
export function getUserById(id: any, callback: (err: any, res: IUser | null) => void) {
  User.findById(id, callback);
}
export function getUserByUsername(username: string, callback: (err: any, res: IUser | null) => void) {
  const req = { username: username };
  User.findOne(req, callback);
}
export function addUser(user: IUser, callback: (err: any, res: IUser) => void) {
  bcrypt.genSalt(10, (err: Error, salt: string) => {
    bcrypt.hash(user.password, salt, (err: Error, hash: string) => {
      if (err) {
        throw err;
      }
      user.password = hash;
      user.save(callback);
    })
  })
}