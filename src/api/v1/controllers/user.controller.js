const userService = require("../../../services/user.service")
const logger = require("../../../core/logger")

/**
 * @desc    Get all users
 * @route   GET /api/v1/users
 * @access  Private/Admin
 */
const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers()

    res.status(200).json({
      status: "success",
      results: users.length,
      data: { users },
    })
  } catch (error) {
    logger.error(`Error getting users: ${error.message}`)
    next(error)
  }
}

/**
 * @desc    Get user by ID
 * @route   GET /api/v1/users/:id
 * @access  Private
 */
const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id)

    res.status(200).json({
      status: "success",
      data: { user },
    })
  } catch (error) {
    logger.error(`Error getting user: ${error.message}`)
    next(error)
  }
}

/**
 * @desc    Create a new user
 * @route   POST /api/v1/users
 * @access  Private/Admin
 */
const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body)

    res.status(201).json({
      status: "success",
      data: { user },
    })
  } catch (error) {
    logger.error(`Error creating user: ${error.message}`)
    next(error)
  }
}

/**
 * @desc    Update user
 * @route   PUT /api/v1/users/:id
 * @access  Private/Admin
 */
const updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body)

    res.status(200).json({
      status: "success",
      data: { user },
    })
  } catch (error) {
    logger.error(`Error updating user: ${error.message}`)
    next(error)
  }
}

/**
 * @desc    Delete user
 * @route   DELETE /api/v1/users/:id
 * @access  Private/Admin
 */
const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id)

    res.status(204).json({
      status: "success",
      data: null,
    })
  } catch (error) {
    logger.error(`Error deleting user: ${error.message}`)
    next(error)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}

