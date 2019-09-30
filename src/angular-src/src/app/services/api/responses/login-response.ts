import { IUser } from 'src/app/shared/user';

export interface ILoginResponse {
  token: string;
  user: IUser;
}