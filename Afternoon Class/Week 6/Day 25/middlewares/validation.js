module.exports = function(err, req, res, next) {
  let statusCode;
  if (err.name === "SequelizeValidationError") {
    // console.log("MASUK VALIDATION", err.errors)
    statusCode = 400;
    let messages = []

    for (let i = 0; i < err.errors.length; i++) {
      // console.log(err.errors[i].message, "==")
      messages.push(err.errors[i].message)
    }
    res.status(statusCode).json({ statusCode, messages })
  }
}