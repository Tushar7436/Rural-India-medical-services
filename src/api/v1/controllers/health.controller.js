const config = require("../../../config")

/**
 * @desc    Health check endpoint
 * @route   GET /api/v1/health
 * @access  Public
 */
const healthCheck = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running",
    data: {
      service: config.app.name,
      environment: config.app.env,
      timestamp: new Date().toISOString(),
    },
  })
}

module.exports = {
  healthCheck,
}

