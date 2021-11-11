const { decodeToken } = require("../helpers/jwt")

class Auth {
  static isSignedIn (req, res, next) {
    // req.headers.token kalau via custom headers
    if (!req.headers.authorization) {
      return res.status(401).json({ statusCode: 401, message: "please sign in first" })
    }
    let token = req.headers.authorization.replace('Bearer ', '');

    let userData = decodeToken(token);
    req.userData = userData;
    next()
  }
}

module.exports = Auth;