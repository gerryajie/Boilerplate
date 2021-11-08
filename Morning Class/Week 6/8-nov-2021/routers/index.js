const route = require("express").Router();

const { Users } = require("../controller/index")
const authentication = require("../middleware/authentication")

route.post("/login", Users.login)
route.post("/user", Users.createUser)

route.use(authentication)
route.get("/user", Users.getUsers)
route.get("/user/:id", Users.getUser)



module.exports = route