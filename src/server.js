const app = require("./app")
const config = require("./config")
const logger = require("./core/logger")
const { connectDatabase } = require("./database")

// Connect to database
const startServer = async () => {
  try {
    await connectDatabase()

    // Start server
    const server = app.listen(config.app.port, () => {
      logger.info(`Server running in ${config.app.env} mode on port ${config.app.port}`)
    })

    // Handle unhandled promise rejections
    process.on("unhandledRejection", (err) => {
      logger.error(`Unhandled Rejection: ${err.message}`)
      // Close server & exit process
      server.close(() => process.exit(1))
    })

    // Handle uncaught exceptions
    process.on("uncaughtException", (err) => {
      logger.error(`Uncaught Exception: ${err.message}`)
      // Exit process
      process.exit(1)
    })
  } catch (error) {
    logger.error(`Failed to start server: ${error.message}`)
    process.exit(1)
  }
}

startServer()

