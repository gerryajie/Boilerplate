const { Picture } = require("../models")

const authorization = async (req, res, next) => {
  try {
    const userId = req.loginUser.id
    const pictureId = req.params.id
    console.log('======== Picture ======')
    console.log(pictureId)

    const picture = await Picture.findOne({
      where: {
        pictureId
      }
    })
    /**
     * picture : {
     *  dataValues : {
     *    id : "",
     *    caption : "",
     *    url : "",
     *    userId : "",
     *    createdAt : "",
     *    updatedAt : ""
     * 
     * }
     * 
     * }
     */

    if (picture.dataValues.userId != userId) {
      res.status(401).json({
        status: 401,
        msg: "Anda tidak berhak akan akses ini"
      })
      return
    }

    next()


  } catch (error) {
    // next(error)
    console.log(error)
  }
}

module.exports = authorization