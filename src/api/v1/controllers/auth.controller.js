const authService = require("../../../services/auth.service")
const logger = require("../../../core/logger")

/**
 * @desc    Register a new user
 * @route   POST /api/v1/auth/register
 * @access  Public
 */
const register = async (req, res, next) => {
  try {
    const { user, token } = await authService.registerUser(req.body)

    res.status(201).json({
      status: "success",
      token,
      data: { user },
    })
  } catch (error) {
    logger.error(`Registration error: ${error.message}`)
    next(error)
  }
}

/**
 * @desc    Login user
 * @route   POST /api/v1/auth/login
 * @access  Public
 */
const login = async (req, res, next) => {
  try {
    const { user, token } = await authService.loginUser(req.body)

    res.status(200).json({
      status: "success",
      token,
      data: { user },
    })
  } catch (error) {
    logger.error(`Login error: ${error.message}`)
    next(error)
  }
}

/**
 * @desc    Get current user
 * @route   GET /api/v1/auth/me
 * @access  Private
 */
const getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "success",
      data: { user: req.user },
    })
  } catch (error) {
    logger.error(`Get current user error: ${error.message}`)
    next(error)
  }
}

module.exports = {
  register,
  login,
  getMe,
}

