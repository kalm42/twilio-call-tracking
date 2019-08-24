require("dotenv").config()

module.exports = {
  TWILIO_SID: process.env.TWILIO_SID,
  TWILIO_AUTH: process.env.TWILIO_AUTH,
  PORT: process.env.PORT,
  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
}
