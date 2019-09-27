import { genSalt, hash } from 'bcryptjs';

class PasswordHasher {
  public hashPassword(password: string) {
    let passwordHash = '';
    genSalt(10, (err: Error, salt: string) => {
      hash(password, salt, (err: Error, hash: string) => {
        if (err) {
          throw err;
        }
        passwordHash = hash;
      });
    });
    return passwordHash;
  }
}

export default new PasswordHasher();