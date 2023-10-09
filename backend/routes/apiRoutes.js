//routes/apiRoutes.js

const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiControllers");

// Define your API routes here
router.post("/payment", apiController.createPayment);


module.exports = router;
