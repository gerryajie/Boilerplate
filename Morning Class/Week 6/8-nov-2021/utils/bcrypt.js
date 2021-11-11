const bcrypt = require("bcryptjs");

const encodePin = (plain) => {
  try {
    console.log(plain, "<<< PLAIN")
    return bcrypt.hashSync(plain, 10);
  } catch (error) {
    console.log(error)
  }
};

const decodePin = (plain, hash) => {
  return bcrypt.compareSync(plain, hash);
};


module.exports = {
  encodePin,
  decodePin,
};
