const jwt = require("jsonwebtoken");
require('dotenv').config();

function generateToken (payload) {
  return jwt.sign(payload, process.env.SECRET_KEY_JWT);
};

function decodeToken (token) {
  return jwt.verify(token, process.env.SECRET_KEY_JWT)
}

module.exports = {
  generateToken,
  decodeToken,
}