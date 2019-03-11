const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/getfrequency/:number", userController.getfrequency);

module.exports = router;
