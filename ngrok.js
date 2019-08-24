const ngrok = require("ngrok")
const { PORT } = require("./config")

;(async function() {
  const url = await ngrok.connect(PORT)
  console.log(url)
})()
