const { body } = require("express-validator")
const { validate } = require("../middlewares/validation.middleware")

/**
 * Validation rules for user creation and update
 */
const userValidationRules = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Please include a valid email"),
  body("role").optional().isIn(["user", "admin", "provider"]).withMessage("Role must be user, admin, or provider"),
  validate,
]

module.exports = {
  userValidationRules,
}

