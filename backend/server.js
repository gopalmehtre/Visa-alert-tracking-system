require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const alertRoutes = require("./routes/alerts");
const logger = require("./middlewares/loggers");
const errorHandler = require("./utils/errorHandler");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/alerts", alertRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
