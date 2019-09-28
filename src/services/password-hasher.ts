import { genSalt, hash, genSaltSync, hashSync } from 'bcryptjs';

class PasswordHasher {
  public hashPassword(password: string) {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  }
}

export default new PasswordHasher();
