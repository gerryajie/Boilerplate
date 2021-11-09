const { User } = require("../models")
const encryption = require("../helpers/encryption")

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

    return res.status(200).json({ statusCode: 200, message: "login success" });
  }
}

module.exports = SignInController;