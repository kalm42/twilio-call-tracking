/* eslint-disable no-unused-vars */
// General promise failure catch
exports.catchErrors = fn => (req, res, next) => fn(req, res, next).catch(next)

// 404
exports.notFound = (req, res, next) => {
  const err = new Error("Not found")
  err.status = 404
  next(err)
}

// Development Error
exports.developmentErrors = (err, req, res, next) => {
  err.stack = err.stack || ""
  const errorDetails = {
    message: err.message,
    status: err.status,
    stackHighlighted: err.stack.replace(
      /[a-z_-\d]+.js:\d+:\d+/gi,
      "<mark>$&</mark>",
    ),
  }
  res.status(err.status || 500)
  res.format({
    // Based on the `Accept` http header
    "text/html": () => {
      res.render("error", errorDetails)
    }, // Form Submit, Reload the page
    "application/json": () => res.json(errorDetails), // Ajax call, send JSON back
  })
}

// Production Error
exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500)
  res.render("error", {
    message: err.message,
    error: {},
  })
}
