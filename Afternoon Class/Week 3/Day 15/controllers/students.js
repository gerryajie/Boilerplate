let data = require('../models/data.json'); // Import data from models

// Make students controller class
class Student {
  getAllStudents(req, res, next) {
    try {
      // Send response to client with status 200 (OK) and {data: data}
      res.status(200).json({ data: data });
    } catch (error) {
      // If something error it will send response to client with status 500 and {errors: ["Internal Server Error"]}
      res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  getDetailStudent(req, res, next) {
    try {
      // Find student by req.params.id
      let detailData = data.filter(
        (item) => item.id === parseInt(req.params.id)
      );

      if (detailData.length === 0) {
        // Send response to client that data is not found
        return res.status(404).json({ errors: ['Student not found'] });
      }

      // Send response to client with status 200 (OK) and {data: data}
      res.status(200).json({ data: detailData });
    } catch (error) {
      // If something error it will send response to client with status 500 and {errors: ["Internal Server Error"]}
      res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  addStudent(req, res, next) {
    try {
      // Get last id of students
      let lastId = data[data.length - 1].id;

      // Add student data to data
      data.push({
        id: lastId + 1,
        name: req.body.name,
        nickName: req.body.nickName,
        address: req.body.address,
      });

      // Send response to client with status 200 (OK) and {data: data}
      res.status(201).json({ data: data });
    } catch (error) {
      // If something error it will send response to client with status 500 and {errors: ["Internal Server Error"]}
      res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  updateStudent(req, res, next) {
    try {
      // Find the data is exist or not
      let findData = data.some((item) => item.id === parseInt(req.params.id));

      // If data not exists
      if (!findData) {
        // It will response client with status 404 and { errors: ['Student not found'] }
        return res.status(404).json({ errors: ['Student not found'] });
      }

      // Update data student to data by req.params.id
      data = data.map((item) =>
        item.id === parseInt(req.params.id)
          ? {
              id: parseInt(req.params.id),
              name: req.body.name,
              nickName: req.body.nickName,
              city: req.body.city,
            }
          : item
      );

      // It will response to client with status 201 (Created) and { data: data }
      res.status(200).json({ data: data });
    } catch (error) {
      // If something error, it will return response with status 500 and { errors: ["Internal Server Error"] }
      res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  deleteStudent(req, res, next) {
    try {
      // Find the data is exist or not
      let findData = data.some((item) => item.id === parseInt(req.params.id));

      // If data not exists
      if (!findData) {
        // It will response client with status 404 and { errors: ['Student not found'] }
        return res.status(404).json({ errors: ['Student not found'] });
      }

      // Delete data student to data by req.params.id
      data = data.filter((item) => item.id !== parseInt(req.params.id));

      // It will response to client with status 201 (Created) and { data: data }
      res.status(200).json({ data: data });
    } catch (error) {
      // If something error, it will return response with status 500 and { errors: ["Internal Server Error"] }
      res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }
}

module.exports = new Student();
