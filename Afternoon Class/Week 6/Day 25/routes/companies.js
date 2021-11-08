const router = require('express').Router();
const CompaniesController = require("../controllers/companies")

router.get("/", CompaniesController.getAll)
// router.get("/:id", TeachersController.getTeacherById)
router.post("/", CompaniesController.create)

module.exports = router;
