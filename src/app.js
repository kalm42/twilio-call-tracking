const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes/index")
const errorHandlers = require("./handlers/errorHandlers")

const app = express()

app.set("view engine", "html")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", routes)

app.use(errorHandlers.notFound)

if (app.get("env") === "development") {
  app.use(errorHandlers.developmentErrors)
}
app.use(errorHandlers.productionErrors)

module.exports = app
