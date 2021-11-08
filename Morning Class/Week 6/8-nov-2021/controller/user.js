const { User } = require("../models")
const { createToken } = require("../utils/jwt")

class Users {

  static async createUser(req, res, next) {
    try {
      const { name, email, password } = req.body
      console.log(name, email, password)
      const newUser = await User.create({
        name,
        email,
        password
      })

      console.log(newUser, "<<< INI NEW")
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
      const users = User.findAll()
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
      const user = await User.findOne({
        where: {
          email
        }
      })
      console.log(user, "<<<<< INI USER")
      const payload = user.dataValues
      const token = createToken(payload)
      console.log(token, "<<< INI TOKEN")
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