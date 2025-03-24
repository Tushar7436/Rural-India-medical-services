const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const { errorHandler, notFoundHandler } = require("./core/middlewares/error.middleware")
const config = require("./config")
const v1Router = require("./api/v1/routes")

// Initialize express app
const app = express()

// Middleware
app.use(helmet()) // Security headers
app.use(cors()) // Enable CORS
app.use(morgan("dev")) // HTTP request logger
app.use(express.json()) // Parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies

// API Routes
app.use("/api/v1", v1Router)

// Error handling
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app

