const config = require("../../config")
const twilio = require("twilio")
const client = new twilio(config.TWILIO_SID, config.TWILIO_AUTH)

module.exports = client
