const { User } = require("../models")
const { createToken, encodePin, compare } = require("../utils")

class Users {

  static async createUser(req, res, next) {
    try {
      const { name, email, password } = req.body
      const hashPassword = encodePin(password)

      const newUser = await User.create({
        name,
        email,
        password: hashPassword
      })

      res.status(200).json({
        status: 200,
        data: newUser
      })
    } catch (error) {
      // next(error)
      console.log(error)
    }
  }

  static async getUsers(req, res, next) {
    try {
      const users = await User.findAll()
      res.status(200).json({
        status: 200,
        data: users
      })
    } catch (error) {
      console.log(error)
    }
  }

  static async getUser(req, res, next) {
    try {
      const id = req.params.id
      const user = await User.findOne({ where: { id } })
      res.status(200).json({
        status: 200,
        data: user
      })
    } catch (error) {
      console.log(error)
    }
  }

  static async login(req, res, next) {
    try {
      const email = req.body.email
      const password = req.body.password
      const user = await User.findOne({
        where: {
          email
        }
      })

      console.log(password, "<<<< PASS")

      const hashPass = user.dataValues.password

      console.log(hashPass, " <<< HASH")
      const compareResult = compare(password, hashPass)
      console.log(compareResult, "<<<< RESULT")
      if (!compareResult) {
        res.status(401).json({
          status: 401,
          msg: "Masukkan Email dan Password yang benar"
        })
        return
      }


      if (!user) {
        res.status(401).json({
          status: 401,
          msg: "Silahkan daftarkan akun anda"
        })
      }
      const payload = user.dataValues
      const token = createToken(payload)
      res.status(200).json({
        status: 200,
        token,

      })
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = Users