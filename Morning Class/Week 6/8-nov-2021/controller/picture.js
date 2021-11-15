const { Picture, sequelize } = require("../models")
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
      const order = req.query.order ? req.query.order : 'DESC';
      let date = req.query.date

      let query = `SELECT id, caption, url, "userId", "createdAt", "updatedAt", "like"
      FROM public."Pictures"
      where "userId" = ${userId}`

      if (date) {
        date = date.split("-")
        query += ` and ("createdAt" < '${date[0]}-${date[1]}-${date[2]} 23:59:59' and "createdAt" > '${date[0]}-${date[1]}-${date[2]} 00:00:00')`
      }

      query += `order by "createdAt" ${order}`
      console.log(query)
      let pictures = await sequelize.query(query)
      pictures = pictures[0]
      console.log(pictures, "<<<")
      // const pictures = await Picture.findAll({
      //   where: {
      //     userId,

      //     createdAt: {
      //       // [Op.gt]: TODAY_START,
      //       [Op.between]: [moment().utcOffset("+07.00").format('YYYY-MM-DD HH:mm')]
      //     }
      //   },
      //   order: [["createdAt", order]]
      // });

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