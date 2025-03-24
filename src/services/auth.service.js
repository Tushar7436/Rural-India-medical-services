const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const config = require("../config")
const models = require("../database/models")
const ApiError = require("../core/utils/api-error")

/**
 * Generate JWT token
 * @param {string} id - User ID
 * @returns {string} JWT token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  })
}

/**
 * Register a new user
 * @param {Object} userData - User data
 * @returns {Object} User object and token
 */
const registerUser = async (userData) => {
  const { name, email, password } = userData

  // Check if user already exists
  let existingUser

  if (config.database.type === "mongodb") {
    existingUser = await models.User.findOne({ email })
  } else if (config.database.type === "postgresql") {
    existingUser = await models.User.findOne({ where: { email } })
  }

  if (existingUser) {
    throw new ApiError(400, "User already exists")
  }

  // Create user
  let user

  if (config.database.type === "mongodb") {
    // MongoDB already hashes password in the pre-save hook
    user = await models.User.create({
      name,
      email,
      password,
    })

    user = user.toObject()
    delete user.password
  } else if (config.database.type === "postgresql") {
    // Hash password for PostgreSQL
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    user = await models.User.create({
      name,
      email,
      password: hashedPassword,
    })

    user = user.toJSON()
    delete user.password
  }

  // Generate token
  const token = generateToken(user.id)

  return { user, token }
}

/**
 * Login a user
 * @param {Object} credentials - User credentials
 * @returns {Object} User object and token
 */
const loginUser = async (credentials) => {
  const { email, password } = credentials

  // Check if user exists
  let user

  if (config.database.type === "mongodb") {
    user = await models.User.findOne({ email }).select("+password")
  } else if (config.database.type === "postgresql") {
    user = await models.User.findOne({ where: { email } })
  }

  if (!user) {
    throw new ApiError(401, "Invalid credentials")
  }

  // Check if password matches
  let isMatch

  if (config.database.type === "mongodb") {
    isMatch = await user.matchPassword(password)
  } else if (config.database.type === "postgresql") {
    isMatch = await bcrypt.compare(password, user.password)
  }

  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials")
  }

  // Generate token
  const token = generateToken(user.id)

  // Remove password from response
  if (config.database.type === "mongodb") {
    user = user.toObject()
    delete user.password
  } else if (config.database.type === "postgresql") {
    user = user.toJSON()
    delete user.password
  }

  return { user, token }
}

module.exports = {
  registerUser,
  loginUser,
  generateToken,
}

