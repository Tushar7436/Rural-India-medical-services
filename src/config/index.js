const dotenv = require("dotenv")

// Load environment variables
dotenv.config()

const config = {
  app: {
    name: process.env.APP_NAME || "Node Express Boilerplate",
    env: process.env.NODE_ENV || "development",
    port: Number.parseInt(process.env.PORT, 10) || 5000,
  },
  database: {
    // Choose database type: 'mongodb' or 'postgresql'
    type: process.env.DB_TYPE || "mongodb",

    // MongoDB configuration
    mongodb: {
      uri: process.env.MONGODB_URI || "mongodb://localhost:27017/boilerplate",
    },

    // PostgreSQL configuration
    postgresql: {
      host: process.env.PG_HOST || "localhost",
      port: Number.parseInt(process.env.PG_PORT, 10) || 5432,
      database: process.env.PG_DATABASE || "boilerplate",
      username: process.env.PG_USERNAME || "postgres",
      password: process.env.PG_PASSWORD || "postgres",
      sync: process.env.PG_SYNC === "true",
      alter: process.env.PG_ALTER === "true",
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || "your-secret-key",
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
  },
  logging: {
    level: process.env.LOG_LEVEL || "info",
  },
}

module.exports = config

