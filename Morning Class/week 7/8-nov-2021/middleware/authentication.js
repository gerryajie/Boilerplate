const { verifyToken } = require("../utils/jwt")
const { User } = require("../models")

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.access_token
    if (token) {
      const payload = verifyToken(token)
      console.log(payload)
      const email = payload.email
      const user = await User.findOne({
        where: {
          email
        }
      })
      if (user) {
        req.loginUser = payload
        next()
      } else {
        res.status(401).json({
          status: 401,
          msg: "Silahkan Login"
        })
      }
    } else {
      res.status(401).json({
        status: 401,
        msg: "Silahkan Login"
      })
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = authentication