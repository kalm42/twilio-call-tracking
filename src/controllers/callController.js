const VoiceResponse = require("twilio").twiml.VoiceResponse

exports.speak = (req, res) => {
  console.log("Request: ", req.body)

  const twiml = new VoiceResponse()
  twiml.say({ voice: "alice" }, "Connecting you to Kyle now.")
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
