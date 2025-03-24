const { body } = require("express-validator")
const { validate } = require("../middlewares/validation.middleware")

/**
 * Validation rules for user registration
 */
const registerValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Please include a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  validate,
]

/**
 * Validation rules for user login
 */
const loginValidationRules = [
  body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Please include a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
  validate,
]

module.exports = {
  registerValidationRules,
  loginValidationRules,
}

