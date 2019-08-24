const express = require("express")
const router = express.Router()
const callController = require("../controllers/callController")
const { catchErrors } = require("../handlers/errorHandlers")

router.post("/", catchErrors(callController.speak))
router.post("/goodbye", catchErrors(callController.goodbye))

module.exports = router
