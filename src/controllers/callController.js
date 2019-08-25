const VoiceResponse = require("twilio").twiml.VoiceResponse
const firebase = require("../firebase")
const errorHandler = require("../handlers/errorHandlers")

/**
 * This is the request body commented here for future reference.
 * Request:  { Called: '+19014461241',
 *   ToState: 'TN',
 *   CallerCountry: 'US',
 *   Direction: 'inbound',
 *   CallerState: 'CA',
 *   ToZip: '38126',
 *   CallSid: 'CA7a9c6fe684e812d5b25f7c659ee54a64',
 *   To: '+19014461241',
 *   CallerZip: '92506',
 *   ToCountry: 'US',
 *   ApiVersion: '2010-04-01',
 *   CalledZip: '38126',
 *   CalledCity: 'MEMPHIS',
 *   CallStatus: 'ringing',
 *   From: '+19512127174',
 *   AccountSid: 'AC50f507c07b3892824fce3479fe9cc945',
 *   CalledCountry: 'US',
 *   CallerCity: 'RIVERSIDE',
 *   Caller: '+19512127174',
 *   FromCountry: 'US',
 *   ToCity: 'MEMPHIS',
 *   FromCity: 'RIVERSIDE',
 *   CalledState: 'TN',
 *   FromZip: '92506',
 *   FromState: 'CA' }
 */

exports.speak = (req, res) => {
  const called = req.body.Called
  try {
    firebase.incrementCounter(called)
  } catch (error) {
    errorHandler.developmentErrors(error)
  }

  const twiml = new VoiceResponse()
  twiml.say({ voice: "alice" }, "Connecting you to Kyle.")
  twiml.dial("+19512127174", {
    action: "/goodbye/",
  })
  res.set("Content-Type", "text/xml")
  res.send(twiml.toString())
}

exports.goodbye = (req, res) => {
  const twiml = new VoiceResponse()
  twiml.say({ voice: "alice" }, "Thank you for calling calm 42. Goodbye.")
  twiml.hangup()
  res.set("Content-Type", "text/xml")
  res.send(twiml.toString())
}
