const express = require("express");
require("express-async-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const error = require("./middleware/error");
const users = require("./routes/users");
const app = express();
var jsend = require("./plugin/jsend");

const corsOptions = {
  exposedHeaders: "x-auth-token"
};

app.use(jsend());
app.use(logger("dev"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user", users);
app.use(error);

module.exports = app;
