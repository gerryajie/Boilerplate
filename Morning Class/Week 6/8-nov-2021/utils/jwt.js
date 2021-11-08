// require('dotenv').config();
// console.log(process.env.secret)
const jwt = require("jsonwebtoken")

const createToken = (payload) => { // Membuat fungsi create token
  try {
    const token = jwt.sign(payload, process.env.secret) // Membuat token
    return token // mengembalikan token yang telah dibuat
  } catch (error) {
    return error  // Menangkap error yang terjadi di block try
  }
}

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.secret) // Mengecek token yang dimasukkan
  } catch (error) {
    return error
  }
}

// Mengekspor fungsi yang telah dibuat
module.exports = {
  createToken,
  verifyToken
}