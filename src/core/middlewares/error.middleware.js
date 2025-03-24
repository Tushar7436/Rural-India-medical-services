const config = require("../../config")
const logger = require("../logger")
const ApiError = require("../utils/api-error")

/**
 * Handle 404 errors
 */
const notFoundHandler = (req, res, next) => {
  next(new ApiError(404, `Resource not found - ${req.originalUrl}`))
}

/**
 * Global error handler
 */
const errorHandler = (err, req, res, next) => {
  const error = { ...err }
  error.message = err.message

  // Log error
  logger.error(`${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)

  // Send response
  res.status(err.statusCode || 500).json({
    status: "error",
    statusCode: err.statusCode || 500,
    message: err.message || "Server Error",
    ...(config.app.env === "development" && { stack: err.stack }),
  })
}

module.exports = {
  notFoundHandler,
  errorHandler,
}

