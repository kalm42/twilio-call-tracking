const config = require("../config")

// TODO: Connect to firebase

// Start the function
const app = require("./app")
app.set("port", config.PORT || 7777)
const server = app.listen(app.get("port"), () => {
  console.log(`- 💻 Express is running 🏃‍ on PORT ${server.address().port}`)
})
