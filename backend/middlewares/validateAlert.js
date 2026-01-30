function validateAlert(req, res, next) {
  const { country, city, visaType } = req.body;

  if (!country || !city || !visaType) {
    return res.status(400).json({
      message: "country, city, and visaType are required",
    });
  }

  next();
}

module.exports = validateAlert;