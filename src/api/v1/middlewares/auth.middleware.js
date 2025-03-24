const jwt = require("jsonwebtoken")
const models = require("../../../database/models")
const config = require("../../../config")
const ApiError = require("../../../core/utils/api-error")

/**
 * Protect routes - Verify JWT token and attach user to request
 */
const protect = async (req, res, next) => {
  try {
    let token

    // Get token from header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1]
    }

    // Check if token exists
    if (!token) {
      return next(new ApiError(401, "Not authorized to access this route"))
    }

    // Verify token
    const decoded = jwt.verify(token, config.jwt.secret)

    // Get user from token
    let user

    if (config.database.type === "mongodb") {
      user = await models.User.findById(decoded.id)
    } else if (config.database.type === "postgresql") {
      user = await models.User.findByPk(decoded.id)
    }

    if (!user) {
      return next(new ApiError(401, "User no longer exists"))
    }

    // Add user to request
    req.user = user
    next()
  } catch (error) {
    return next(new ApiError(401, "Not authorized to access this route"))
  }
}

/**
 * Authorize roles
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ApiError(403, `Role ${req.user.role} is not authorized to access this route`))
    }
    next()
  }
}

module.exports = {
  protect,
  authorize,
}

