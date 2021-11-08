const { User, Company } = require("../models")
const { encrypt } = require("../helpers/bcrypt")
const { getUserData } = require("../helpers/jwt")
const generateRandomString = require("../helpers/generateRandomString")
const nodemailer = require("nodemailer");
const Handlebars = require("handlebars")

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
    console.log("masikl")
    let statusCode;
    const email = req.body.email
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const companyId = req.body.companyId
    const password = encrypt(req.body.password) // enkripsi
    const verifCode = generateRandomString(10);
    const objUser = { email, firstName, lastName, companyId, password }
    console.log("🚀 ~ file: users.js ~ line 40 ~ UsersController ~ create ~ objUser", objUser)
    
    // const user = await User.create(objUser);
    // try {
    //   const user = await User.create(objUser);
    //   if (user) {
    //     statusCode = 201;
    //     let output = {
    //       statusCode, userCreated: user
    //     }
    //     res.status(201).json(output)
    //   }
    // } catch (error) {
    //   next(err)
    // }
    User.create(objUser)
      .then(user => {
        console.log("masuk sequelzie")
        if (user) {
          statusCode = 201;
          delete user.dataValues.password
          let output = {
            statusCode, userCreated: user
          }

          //kirim link verifikasi account vie email pake nodemailer
          // url = localhost:3000/verify?email=fmakarim@binar.co.id&verifCode=OUaQikgbVl
          // verifCode = OUaQikgbVl

          // let transporter = nodemailer.createTransport({
          //   service: "Gmail",
          //   auth: {
          //     user: "tesfadhlan@gmail.com",
          //     pass: "secret123!@#",
          //   },
          // });

          // let url = `localhost:3000/verify?email=${user.email}&verifCode=${user.verifCode}`

          // var source = `<a href="{{url}}">Click to Verify</a>`;
          // var template = Handlebars.compile(source);
          // var data = { "url": url };
          // var result = template(data);

          // let info = await transporter.sendMail({
          //   from: `tesfadhlan@gmail.com`, // sender address
          //   to: `${email}`, // list of receivers
          //   subject: "[My App] Account Verification", // Subject line
          //   text: "Account Verification", // plain text body
          //   html: `<a href="${url}">${url}</a>`, // html body
          // });

          // console.log("Message sent: %s", info.messageId);

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