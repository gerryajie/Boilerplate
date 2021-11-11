const { Picture } = require("../models")


class Pictures {
  static async postPicture(req, res, next) {
    try {

      const loginUserPayload = req.loginUser
      console.log(loginUserPayload, "<<<<<< LOGIN ")
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
      const { caption, url } = req.body
      const newPicture = await Picture.create({ caption, url, userId: loginUserPayload.id })
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
      const page = +req.query.page || 1 // mendapatkan data dari query string dengan default value = 1
      const limit = Number(req.query.limit) || 10 // mendapatkan data dari query string dengan default value = 10
      const startIndex = (page - 1) * limit // Index awal data yang di inginkan
      const endIndex = page * limit // Index akhir data yang di inginkan
      const userId = req.loginUser.id // dapat user Id dari payload yang didapatkan dari token 
      const pictures = await Picture.findAll({
        where: {
          userId
        },
        order: [["id", "ASC"]]
      })

      /**
       * data dari pictures berbentuk array of object yang memiliki key  data values
       *   Picture {
    dataValues: {
      id: 9,
      caption: 'semangat Juga',
      url: 'url://hafis 2',
      userId: 1,
      createdAt: 2021-11-11T02:36:41.755Z,
      updatedAt: 2021-11-11T02:36:41.755Z
    },
    _previousDataValues: {
      id: 9,
      caption: 'semangat Juga',
      url: 'url://hafis 2',
      userId: 1,
      createdAt: 2021-11-11T02:36:41.755Z,
      updatedAt: 2021-11-11T02:36:41.755Z
    },
    _changed: Set(0) {},
    _options: {
      isNewRecord: false,
      _schema: null,
      _schemaDelimiter: '',
      raw: true,
      attributes: [Array]
    },
    isNewRecord: false
]
      dari contoh data di atas kita butuhkan cuman dataValues maka kita jalankan fungsi map dari pictures dan hanya mengambil data values dari setiap item
       */
      const pictureData = pictures.map(el => {
        return el.dataValues // mengembalikan dataValues dari setiap element
      })
      const result = pictureData.slice(startIndex, endIndex) // Mengambil data sesuai dengan index yang di inginkan 

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