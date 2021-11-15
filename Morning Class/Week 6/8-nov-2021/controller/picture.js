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
      // const userId = req.loginUser.id // dapat user Id dari payload yang didapatkan dari token 
      const userId = req.query.userId
      console.log(userId, "=======")
      const order = req.query.order ? req.query.order : 'DESC';
      let date = req.query.date // yyyy-mm-dd
      let startDate = req.query.startDate // yyyy-mm-dd
      let endDate = req.query.endDate // yyyy-mm-dd
      const isThisMonth = req.query.isThisMonth // 0 : 1
      const isThisWeek = req.query.isThisWeek // 0 : 1
      const isThisYear = req.query.isThisYear // 0 : 1


      if (Number(isThisMonth)) {
        startDate = moment().startOf('month').format('YYYY-MM-DD');
        endDate = moment().endOf('month').format('YYYY-MM-DD');
      } else if (Number(isThisWeek)) {
        startDate = moment().startOf('week').format('YYYY-MM-DD');
        endDate = moment().endOf('week').format('YYYY-MM-DD');
      } else if (Number(isThisYear)) {
        startDate = moment().startOf('year').format('YYYY-MM-DD');
        endDate = moment().endOf('year').format('YYYY-MM-DD');
      }

      // let startDate = req.query.startDate
      // let endDate = req.query.endDate
      let query = `SELECT id, caption, url, "userId", "createdAt", "updatedAt", "like"
      FROM public."Pictures"`

      if (date) {
        date = date.split("-")
        query += ` where ("createdAt" < '${date[0]}-${date[1]}-${date[2]} 23:59:59' and "createdAt" > '${date[0]}-${date[1]}-${date[2]} 00:00:00')`
      } else if (startDate && endDate) {
        startDate = startDate.split("-")
        endDate = endDate.split("-")
        query += ` where ("createdAt" < '${endDate[0]}-${endDate[1]}-${endDate[2]} 23:59:59' and "createdAt" > '${startDate[0]}-${startDate[1]}-${startDate[2]} 00:00:00')`
      }

      if ((date || (startDate && endDate)) && userId) {
        query += ` and "userId" = ${userId}`
      } else if (userId) {
        query += ` where "userId" = ${userId}`

      }

      query += `order by "createdAt" ${order}`
      let pictures = await sequelize.query(query)
      pictures = pictures[0]
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