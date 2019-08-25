const smsController = require("../controllers/smsController")
const firebase = require("../firebase")
const client = require("../twilio")

test("should text me", () => {
  firebase.incrementSMSCounter = jest.fn()
  client.messages.create = jest.fn()
  const send = jest.fn()
  const res = {
    send,
  }
  const req = { body: { Body: "", From: "", To: "" } }
  smsController.sms(req, res)
  expect(send.mock.calls).toHaveLength(1)
  expect(firebase.incrementSMSCounter.mock.calls).toHaveLength(1)
  expect(client.messages.create.mock.calls).toHaveLength(1)
})
