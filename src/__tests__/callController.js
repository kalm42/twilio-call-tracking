const callController = require("../controllers/callController")
const firebase = require("../firebase")

test("should call me", () => {
  firebase.incrementCounter = jest.fn()
  const send = jest.fn()
  const set = jest.fn()
  const res = {
    send,
    set,
  }
  const req = {
    body: {
      Called: "+15551231234",
    },
  }
  callController.speak(req, res)
  expect(send.mock.calls).toHaveLength(1)
  expect(firebase.incrementCounter.mock.calls).toHaveLength(1)
  expect(send.mock.calls[0][0]).toBe(
    '<?xml version="1.0" encoding="UTF-8"?><Response><Say voice="alice">Connecting you to Kyle.</Say><Dial action="/goodbye/">+19512127174</Dial></Response>',
  )
})

test("should say goodbye", () => {
  const send = jest.fn()
  const set = jest.fn()
  const res = {
    send,
    set,
  }
  callController.goodbye({}, res)
  expect(send.mock.calls).toHaveLength(1)
  expect(send.mock.calls[0][0]).toBe(
    '<?xml version="1.0" encoding="UTF-8"?><Response><Say voice="alice">Thank you for calling calm 42. Goodbye.</Say><Hangup/></Response>',
  )
})
