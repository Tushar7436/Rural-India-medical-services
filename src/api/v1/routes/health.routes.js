const express = require("express")
const { healthCheck } = require("../controllers/health.controller")

const router = express.Router()

// Health check route
router.get("/", healthCheck)

module.exports = router

