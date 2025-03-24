const mongoose = require("mongoose")
const { Sequelize } = require("sequelize")
const config = require("../config")
const logger = require("../core/logger")

// Database connection function
const connectDatabase = async () => {
  const dbType = config.database.type

  try {
    if (dbType === "mongodb") {
      // MongoDB connection
      await mongoose.connect(config.database.mongodb.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      logger.info("MongoDB connected successfully")
    } else if (dbType === "postgresql") {
      // PostgreSQL connection
      const sequelize = new Sequelize(
        config.database.postgresql.database,
        config.database.postgresql.username,
        config.database.postgresql.password,
        {
          host: config.database.postgresql.host,
          dialect: "postgres",
          logging: false,
          pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
          },
        },
      )

      // Test the connection
      await sequelize.authenticate()
      logger.info("PostgreSQL connected successfully")

      // Sync models with database
      if (config.database.postgresql.sync) {
        await sequelize.sync({ alter: config.database.postgresql.alter })
        logger.info("Database synchronized")
      }

      // Export sequelize instance
      global.sequelize = sequelize
    } else {
      throw new Error(`Unsupported database type: ${dbType}`)
    }
  } catch (error) {
    logger.error(`Database connection error: ${error.message}`)
    throw error
  }
}

module.exports = { connectDatabase }

