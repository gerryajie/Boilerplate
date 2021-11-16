const { Picture, sequelize } = require("../models")
const moment = require('moment')
// const { Op } = require('sequelize');


class Pictures {
  static async postPicture(req, res, next) {
    try {

      const loginUserPayload = req.loginUser
      /**
       * req.body = {
       *  caption : "user",
       *  url : "url"
       * }
       * 
       * const url = req.body.url
       * const caption = req.body.caption
       * 
       * const { url, caption } = req.body
       */
      const { caption, url, like } = req.body
      const newPicture = await Picture.create({ caption, url, userId: loginUserPayload.id, like })
      res.status(200).json({
        status: 200,
        data: newPicture,
        // msg : ": "
      })
    } catch (error) {
      next(error)
    }
  }
  static async getPicture(req, res, next) {
    try {

      const id = req.params.id
      const picture = await Picture.findOne({
        where: {
          id
        }
      })

      res.status(200).json({
        status: 200,
        data: picture
      })

    } catch (error) {
      next(error)
    }
  }
  static async getPictures(req, res, next) {
    try {
      const userId = req.loginUser.id // dapat user Id dari payload yang didapatkan dari token 
      const page = req.query.page
      const limit = req.query.limit



      const pictures = await Picture.findAll({
        where: {
          userId,
        },
        order: [["createdAt", 'DESC']]
      });

      let page = +req.query.page  // mendapatkan data dari query string dengan default value = 1
      let limit = Number(req.query.limit)  // mendapatkan data dari query string dengan default value = 10
      if ((pictures.length > 6) && (!limit && !page)) {
        limit = 3
        page = 1
      }
      const startIndex = (page - 1) * limit // Index awal data yang di inginkan
      const endIndex = page * limit // Index akhir data yang di inginkan

      // const result = pictures.slice(startIndex, endIndex)

      const result = page && limit ? pictures.slice(startIndex, endIndex) : pictures // Mengambil data sesuai dengan index yang di inginkan 

      res.status(200).json({
        status: 200,
        data: result
      })
    } catch (error) {
      next(error)
    }
  }
  static async deletePicture(req, res, next) {
    try {
      const id = req.params.id
      const deletedPicture = await Picture.destroy({
        where: {
          id
        },
        returning: true
      })

      if (!deletedPicture) {
        res.status(404).json({
          status: 404,
          msg: "Gambar tidak ditemukan"
        })
        return
      }

      res.status(200).json({
        status: 200,
        data: {
          msg: "Berhasil menghapus gambar dengan Id " + id
        }
      })


    } catch (error) {
      next(error)
    }
  }
  static async editPicture(req, res, next) {
    try {
      const id = req.params.id
      const { caption, url } = req.body
      const updatedPicture = await Picture.update({ caption, url }, {
        where: {
          id
        },
        returning: true
      })

      if (!updatedPicture[0]) {
        res.status(404).json({
          status: 404,
          msg: "Gambar tidak ditemukan"
        })
        return
      }

      res.status(200).json({
        status: 200,
        data: {
          data: updatedPicture[1][0],
          msg: "Berhasil mengubah data"
        }
      })


    } catch (error) {
      next(error)
    }
  }
}

module.exports = Pictures