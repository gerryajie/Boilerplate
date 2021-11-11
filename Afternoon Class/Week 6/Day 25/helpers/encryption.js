const bcrypt = require("bcrypt");
require('dotenv').config();

class Encryption {
  static encryptPass (rawPass) {
    const saltRounds = parseInt(process.env.SALT_ROUNDS);
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(rawPass, salt);
    return hash;
  }

  static isPassValid (rawPass, hashedPass) {
    return bcrypt.compareSync(rawPass, hashedPass);
  }
}

module.exports = Encryption;
