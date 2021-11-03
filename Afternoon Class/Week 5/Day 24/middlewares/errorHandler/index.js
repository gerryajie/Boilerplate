module.exports = (req, res, next, err) => {
  res.status(err.statusCode).json({ errors: err.messages || [err.message] });
};
