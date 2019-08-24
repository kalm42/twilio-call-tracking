const callController = require("../controllers/callController")

test("should call me", () => {
  const send = jest.fn()
  const set = jest.fn()
  const res = {
    send,
    set,
  }
  callController.speak({}, res)
  expect(send.mock.calls).toHaveLength(1)
  expect(send.mock.calls[0][0]).toBe(
    '<?xml version="1.0" encoding="UTF-8"?><Response><Say voice="alice">Connecting you to Kyle now.</Say><Dial action="/goodbye/">+19512127174</Dial></Response>',
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
