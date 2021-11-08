const { Company } = require("../models")
const { getUserData } = require("../helpers/jwt")

class CompaniesController {
  static async create(req, res) {
    let token = req.headers.token;
    // let userData = getUserData(token);
    // if (userData.role !== "admin") {
    //   res.status(403).json({ message: "forbidden access to this endpoint" })
    // }
    const name = req.body.name
    const objCompany = { name }
    const company = await Company.create(objCompany);
    if (company) {
      res.status(200).json(company)
    }
  }

  static async getAll(req, res) {
    const companies = await Company.findAll();
    res.status(200).json(companies)
  }
}

module.exports = CompaniesController