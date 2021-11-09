const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
const JWTStrategy = require("passport-jwt").Strategy
const ExtractJWT = require("passport-jwt").ExtractJwt
const { User } = require("../../models")


exports.signin = (req, res, next) => {
  console.log(req.body)
  // It will go to ../middlewares/auth/index.js -> passport.use("signin")
  passport.authenticate("signin", { session: false }, (err, User, info) => {
    // After go to ../middlewares/auth/index.js -> passport.use("signin")
    // It will bring the variable from done() function
    // Like err = null, user = false, info = { message: "User can't be creted" }
    // Or err = null, user = userSignUp, info = { message: "User can be creted" }
    console.log(User)
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
      });
    }

    // If user is false
    if (!User) {
      console.log(info)
      return res.status(401).json({
        message: info.message,
      });
    }

    // Make req.user that will be save the user value
    // And it will bring to controller
    req.user = user;

    // Next to authController.getToken
    next();
  })(req, res, next);
};

// If user call this passport
passport.use(
  "signin",
  new LocalStrategy(
    {
      usernameField: "email", // usernameField is come from req.body.email
      passwordField: "password", // passwordField is come from req.body.password
      passReqToCallback: true, // enable to read req.body/req.params/req.query
    },
    async (req, email, password, done) => {
      try {
        console.log("++++++++++")
        // After user call this passport
        // It will run this method and create the user depends on req.body
        let userSignIn = await User.findOne({ email });

        // If user doesn't exist
        if (!userSignIn) {
          return done(null, false, {
            message: "Email not found",
          });
        }

        // If user exist
        let validate = await bcrypt.compare(password, userSignIn.password);

        // If password is wrong
        if (!validate) {
          return done(null, false, {
            message: "Wrong password",
          });
        }

        // If create user success, it will make
        // err = null
        // user = userSignUp
        // info = { message: "User can be creted" }
        return done(null, userSignIn, {
          message: "User can sign in",
        });
      } catch (e) {
        console.log(e);
        // If create user failed, it will make
        // err = null
        // user = false
        // info = { message: "User can't be creted" }
        return done(null, false, {
          message: "User can't sign in",
        });
      }
    }
  )
);



// exports.signin = (req, res, next) => {
//   passport.authenticate("signin", { session: false }, (err, user, info) => {
//     if (err) {
//       return res.status(500).json({
//         message: "Internal Server Error",
//         error: err.message,
//       });
//     }
//     console.log("======= SIGN IN 1 =======")
//     console.log(user)
//     if (!user) {
//       return res.status(401).json({
//         message: info.message,
//       });
//     }

//     req.user = user
//     next()
//   })(req, res, next)
// }

// passport.use(
//   "signin",
//   new LocalStrategy(
//     {
//       usernameField: "email", // usernameField is come from req.body.email
//       passwordField: "password", // passwordField is come from req.body.password
//       passReqToCallback: true, // enable to read req.body/req.params/req.query
//     },
//     async (req, email, password, done) => {
//       try {
//         console.log("======= SIGN IN 2 =======")

//         const user = await User.findOne({ email })
//         if (!user) {
//           return done(null, false, {
//             message: "User not found"
//           })
//         }

//         return done(null, user, {
//           message: "Success Sign in"
//         })
//       } catch (error) {
//         return done(null, false, {
//           message: "Something wrong"
//         })
//       }
//     }
//   )
// )
