const { Picture } = require("../models")

const authorization = async (req, res, next) => {
  try {
    console.log("======= auth ======")
    const pictureId = req.params.id
    console.log(pictureId)
    const userId = req.loginUser.id
    console.log(req.params)
    const picture = await Picture.findOne({
      where: {
        id: pictureId
      }
    })

    console.log("===== Picture =====")
    console.log(picture)
    console.log("==== Login user ====")
    console.log(req.loginUser)

    if (picture.dataValues.userId != userId) {
      res.status(401).json({
        status: 401,
        msg: "Anda tidak berhak mengakses data ini"
      })
      return
    }

    next()

  } catch (error) {
    next(error)
  }
}

module.exports = authorization