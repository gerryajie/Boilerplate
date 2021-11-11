const router = require('express').Router();
const UsersController = require("../controllers/users")

router.get("/", UsersController.getAll)
// router.get("/:id", TeachersController.getTeacherById)

module.exports = router;
