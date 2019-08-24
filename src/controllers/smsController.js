const client = require("../twilio")
const firebase = require("../firebase")
const errorHandler = require("../handlers/errorHandlers")

/**
 * This is the request body commented here for future reference.
 * Req Body:  { ToCountry: 'US',
 *   ToState: 'TN',
 *   SmsMessageSid: 'SM03181b79865f62ab7cf4a745a0ea2c21',
 *   NumMedia: '0',
 *   ToCity: 'MEMPHIS',
 *   FromZip: '92506',
 *   SmsSid: 'SM03181b79865f62ab7cf4a745a0ea2c21',
 *   FromState: 'CA',
 *   SmsStatus: 'received',
 *   FromCity: 'RIVERSIDE',
 *   Body: 'Hi',
 *   FromCountry: 'US',
 *   To: '+19014461241',
 *   ToZip: '38126',
 *   NumSegments: '1',
 *   MessageSid: 'SM03181b79865f62ab7cf4a745a0ea2c21',
 *   AccountSid: 'AC50f507c07b3892824fce3479fe9cc945',
 *   From: '+19512127174',
 *   ApiVersion: '2010-04-01' }
 */

exports.sms = (req, res) => {
  const {
    body: { Body, From, To },
  } = req

  try {
    firebase.incrementSMSCounter(To)
  } catch (error) {
    errorHandler.developmentErrors(error)
  }

  client.messages.create({
    body: `From: ${From},\n${Body}`,
    from: To,
    to: "+19512127174",
  })

  res.send()
}
