// require('dotenv').config();
// console.log(process.env.secret)
const jwt = require("jsonwebtoken")
const createToken = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.secret)
    return token
  } catch (error) {
    return error
  }
}

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.secret)
  } catch (error) {
    return error
  }
}

// const token = createToken({ Name: "Hafis" })
// const verify = verifyToken(token)
// console.log(verify)

module.exports = {
  createToken,
  verifyToken
}