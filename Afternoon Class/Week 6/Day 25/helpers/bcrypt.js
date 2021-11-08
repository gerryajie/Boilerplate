const bcrypt = require('bcrypt');


// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

function encrypt(rawPassword) {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(rawPassword, saltRounds);
  return hash;
}

function isCorrectPw(rawPw, hashedPw) {
  return bcrypt.compareSync(rawPw, hashedPw);
}

module.exports = {
  encrypt,
  isCorrectPw,
}


