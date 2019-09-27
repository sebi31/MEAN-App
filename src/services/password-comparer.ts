import { compare } from 'bcryptjs';


class PasswordComparer {
  public comparePassword(pasword: string, hash: string, callback: (err: Error | null, success: boolean) => void) {
    compare(pasword, hash, (err: Error, success: boolean) => {
      if (err) {
        throw err;
      }
      callback(null, success);
    });
  }
}

export default new PasswordComparer();
