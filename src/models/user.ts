import { Schema, Model, Document, model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  username: string;
  password: string;
}

// TODO(Seb): required fields
const UserSchema: Schema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
});

export const User: Model<IUser> = model('User', UserSchema);
