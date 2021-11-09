const router = require('express').Router();
const CompaniesController = require("../controllers/companies")
const { isSignedIn } = require("../middlewares/auth")

router.get("/", isSignedIn, CompaniesController.getAll)
// router.get("/:id", TeachersController.getTeacherById)
router.post("/", isSignedIn, CompaniesController.create)

module.exports = router;
