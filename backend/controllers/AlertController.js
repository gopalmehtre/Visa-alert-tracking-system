const Alert = require("../models/Alert");

const getAlerts = async (req, res, next) => {
  try {
    const { country, status } = req.query;

    const query = {};
    if (country) query.country = country;
    if (status) query.status = status;

    const alerts = await Alert.find(query).sort({ createdAt: -1 });
    res.status(200).json(alerts);
  } catch (error) {
    next(error);
  }
};

const createAlert = async (req, res, next) => {
  try {
    const alert = await Alert.create(req.body);
    res.status(201).json(alert);
  } catch (error) {
    next(error);
  }
};

const updateAlert = async (req, res, next) => {
  try {
    const alert = await Alert.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!alert) {
      return res.status(404).json({ message: "Alert not found" });
    }

    res.status(200).json(alert);
  } catch (error) {
    next(error);
  }
};

const deleteAlert = async (req, res, next) => {
  try {
    const alert = await Alert.findByIdAndDelete(req.params.id);

    if (!alert) {
      return res.status(404).json({ message: "Alert not found" });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAlerts,
  createAlert,
  updateAlert,
  deleteAlert,
};