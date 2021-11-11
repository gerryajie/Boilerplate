const router = require('express').Router();
const UsersWorkingDaysController = require("../controllers/usersWorkingDays")

router.get("/", UsersWorkingDaysController.getAll)
// router.get("/:id", TeachersController.getTeacherById)

module.exports = router;
