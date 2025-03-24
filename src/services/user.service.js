const models = require("../database/models")
const config = require("../config")
const ApiError = require("../core/utils/api-error")

/**
 * Get all users
 * @returns {Array} Array of users
 */
const getAllUsers = async () => {
  let users

  if (config.database.type === "mongodb") {
    users = await models.User.find().select("-password")
  } else if (config.database.type === "postgresql") {
    users = await models.User.findAll({
      attributes: { exclude: ["password"] },
    })
  }

  return users
}

/**
 * Get user by ID
 * @param {string} id - User ID
 * @returns {Object} User object
 */
const getUserById = async (id) => {
  let user

  if (config.database.type === "mongodb") {
    user = await models.User.findById(id).select("-password")
  } else if (config.database.type === "postgresql") {
    user = await models.User.findByPk(id, {
      attributes: { exclude: ["password"] },
    })
  }

  if (!user) {
    throw new ApiError(404, "User not found")
  }

  return user
}

/**
 * Create a new user
 * @param {Object} userData - User data
 * @returns {Object} Created user
 */
const createUser = async (userData) => {
  const { name, email, password, role } = userData
  let user

  if (config.database.type === "mongodb") {
    user = await models.User.create({
      name,
      email,
      password,
      role,
    })

    user = user.toObject()
    delete user.password
  } else if (config.database.type === "postgresql") {
    user = await models.User.create({
      name,
      email,
      password,
      role,
    })

    user = user.toJSON()
    delete user.password
  }

  return user
}

/**
 * Update a user
 * @param {string} id - User ID
 * @param {Object} updateData - Data to update
 * @returns {Object} Updated user
 */
const updateUser = async (id, updateData) => {
  const { name, email, role, isActive } = updateData
  let user

  if (config.database.type === "mongodb") {
    user = await models.User.findByIdAndUpdate(
      id,
      { name, email, role, isActive },
      { new: true, runValidators: true },
    ).select("-password")
  } else if (config.database.type === "postgresql") {
    await models.User.update({ name, email, role, isActive }, { where: { id } })

    user = await models.User.findByPk(id, {
      attributes: { exclude: ["password"] },
    })
  }

  if (!user) {
    throw new ApiError(404, "User not found")
  }

  return user
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {boolean} True if deleted
 */
const deleteUser = async (id) => {
  let user

  if (config.database.type === "mongodb") {
    user = await models.User.findByIdAndDelete(id)
  } else if (config.database.type === "postgresql") {
    user = await models.User.findByPk(id)
    if (user) {
      await user.destroy()
    }
  }

  if (!user) {
    throw new ApiError(404, "User not found")
  }

  return true
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}

