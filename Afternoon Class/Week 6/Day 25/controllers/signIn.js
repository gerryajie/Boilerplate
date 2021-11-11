const { User } = require("../models")
const encryption = require("../helpers/encryption")
const { generateToken, decodeToken } = require("../helpers/jwt");

class SignInController {
  static async signIn(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // get user by email
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(400).json({ statusCode: 401, message: "email/password invalid" });
    }

    let isPassValid = encryption.isPassValid(password, user.password);

    if (!isPassValid) {
      return res.status(401).json({ statusCode: 401, message: "email/password invalid" });
    }

    console.log(user.id)
    console.log(user.email)
    console.log(user.firstName)
    console.log(user.lastName)
    console.log(user.companyId)

    const { id, firstName, lastName, companyId } = user;

    const payload = {
      id, email, firstName, lastName, companyId
    }
    
    console.log("🚀 ~ file: signIn.js ~ line 31 ~ SignInController ~ signIn ~ payload", payload)
    const token = generateToken(payload);

    return res.status(200).json({ statusCode: 200, message: "login success", token });
  }
}

module.exports = SignInController;
