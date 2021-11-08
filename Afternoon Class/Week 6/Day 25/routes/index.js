const router = require('express').Router();
const usersRoute = require("./users")
const companiesRoute = require("./companies")
const usersWorkingDaysRoute = require("./usersWorkingDays")
const SignInController = require("../controllers/signIn")
const UsersController = require("../controllers/users")

router.use("/users", usersRoute)
router.use("/companies", companiesRoute)
router.use("/usersworkingdays", usersWorkingDaysRoute)
router.post("/signin", SignInController.signIn)
router.post("/signup", UsersController.create)
router.get("/verify", UsersController.verifyAcc)

module.exports = router;
