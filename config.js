require("dotenv").config()

module.exports = {
  TWILIO_SID: process.env.TWILIO_SID,
  TWILIO_AUTH: process.env.TWILIO_AUTH,
  PORT: process.env.PORT,
}
