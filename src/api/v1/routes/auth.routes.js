const express = require("express")
const { register, login, getMe } = require("../controllers/auth.controller")
const { protect } = require("../middlewares/auth.middleware")
const { registerValidationRules, loginValidationRules } = require("../validations/auth.validation")

const router = express.Router()

// Public routes
router.post("/register", registerValidationRules, register)
router.post("/login", loginValidationRules, login)

// Protected routes
router.get("/me", protect, getMe)

module.exports = router

