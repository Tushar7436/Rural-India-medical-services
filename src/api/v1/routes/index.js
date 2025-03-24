const express = require("express")
const healthRoutes = require("./health.routes")
const userRoutes = require("./user.routes")
const authRoutes = require("./auth.routes")

const router = express.Router()

// Mount routes
router.use("/health", healthRoutes)
router.use("/users", userRoutes)
router.use("/auth", authRoutes)

module.exports = router

