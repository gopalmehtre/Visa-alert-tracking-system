const express = require("express");
const {
  getAlerts,
  createAlert,
  updateAlert,
  deleteAlert,
} = require("../controllers/AlertController");

const validateAlert = require("../middlewares/validateAlert");

const router = express.Router();

router.get("/", getAlerts);
router.post("/", validateAlert, createAlert);
router.put("/:id", updateAlert);
router.delete("/:id", deleteAlert);

module.exports = router;