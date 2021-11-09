const { User, Company } = require("../models");
const Encryption = require("../helpers/encryption")

class UsersController{
  static async verifyAcc(req, res, next) {
    const email = req.query.email
    const verifCode = req.query.verifCode

    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "email not found"})
    }

    if (user.isVerified === 1) {
      return res.status(400).json({ message: "account already verified" })
    }

    if (verifCode !== user.verifCode) {
      return res.status(400).json({ message: "verifCode not valid"})
    }

    user = await user.update({ isVerified: 1 })
    return res.status(200).json({ message: "verification success" })
  }

  static async create(req, res, next) {
    let statusCode;
    const email = req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const companyId = req.body.companyId
    const password = Encryption.encryptPass(req.body.password);
    console.log("ekspektasi terenkripsi", password)
    // const password = encrypt(req.body.password) // enkripsi
    const objUser = { email, firstName, lastName, companyId, password }
    console.log("🚀 ~ file: users.js ~ line 40 ~ UsersController ~ create ~ objUser", objUser)

    User.create(objUser)
      .then(user => {
        if (user) {
          statusCode = 201;
          delete user.dataValues.password
          let output = {
            statusCode, userCreated: user
          }

          res.status(201).json(output)
        }
      })
      .catch(err => {
        console.log("err", err)
        next(err)
      })
  } 

  static async getAll(req, res) {
    let token = req.headers.token;
    let userData = getUserData(token)
    // kita filter get usernya berdasarkan company id yg lagi login
    let userCompanyId = userData.companyId;
    const users = await User.findAll({ 
      where: {
        companyId: userCompanyId
      },
      include: Company 
    });
    res.status(200).json(users)
  }
}

module.exports = UsersController