const config = require("../../config")
const logger = require("../../core/logger")

const models = {}

if (config.database.type === "mongodb") {
  // MongoDB models
  models.User = require("./mongodb/user.model")

  logger.info("MongoDB models loaded")
} else if (config.database.type === "postgresql") {
  // PostgreSQL models
  const sequelize = global.sequelize

  models.User = require("./postgresql/user.model")(sequelize)

  // Define associations here if needed
  // models.User.hasMany(models.Post);

  logger.info("PostgreSQL models loaded")
} else {
  logger.error(`Unsupported database type: ${config.database.type}`)
}

module.exports = models

