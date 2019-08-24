const express = require("express")
const router = express.Router()
const callController = require("../controllers/callController")
const smsController = require("../controllers/smsController")
const { catchErrors } = require("../handlers/errorHandlers")

// Phone Calls
router.post("/call", catchErrors(callController.speak))
router.post("/goodbye", catchErrors(callController.goodbye))

// Text Messaging
router.post("/sms", catchErrors(smsController.sms))

module.exports = router
