const route = require("express").Router();

const { Users } = require("../controller/index") // Memanggil class dari Controller
const authentication = require("../middleware/authentication") // mengambil fungsi middleware authnetikasi

// route yang tidak menggunkan middleware authentikasi
route.post("/login", Users.login)
route.post("/user", Users.createUser)

route.use(authentication) // Penggunaan authentikasi

//Route yang menggukana middleware authentikasi
route.get("/user", Users.getUsers)
route.get("/user/:id", Users.getUser)



module.exports = route