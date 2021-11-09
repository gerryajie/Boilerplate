const route = require("express").Router();
const passport = require("passport")
const { Users, Picture } = require("../controller/index")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/_authorization")
const auth = require("../middleware/auth")

route.post("/login", Users.login)
route.post("/user", Users.createUser)
// route.use(passport.initialize())

// route.use(authentication)

route.get("/user", auth.authentication, Users.getUsers)
route.get("/user/:id", Users.getUser)

route.post("/picture", Picture.postPicture)

route.delete("/picture/:id", authorization, Picture.deletePicture)
route.put("/picture/:id", authorization, Picture.editPicture)
route.get("/picture/:id", authorization, Picture.getPicture)
route.get("/picture", Picture.getPictures)



module.exports = route