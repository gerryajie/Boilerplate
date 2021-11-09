const { Company } = require("../models")

class CompaniesController {
  static async create(req, res) {
    if (req.userData.companyId != 2) {
      return res.status(403).json({ statusCode: 403, message: "you are not allowed to access this endpoint" })
    }
    const name = req.body.name
    const objCompany = { name }
    const company = await Company.create(objCompany);
    if (company) {
      return res.status(200).json(company)
    }
  }

  static async getAll(req, res) {    
    const companies = await Company.findAll({
      where: {
        id: req.userData.companyId
      }
    });
    res.status(200).json(companies)
  }
}

module.exports = CompaniesController