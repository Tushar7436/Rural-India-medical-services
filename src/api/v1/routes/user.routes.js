const express = require("express")
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/user.controller")
const { protect, authorize } = require("../middlewares/auth.middleware")
const { userValidationRules } = require("../validations/user.validation")

const router = express.Router()

// Protect all routes after this middleware
router.use(protect)

// Routes
router.route("/").get(authorize("admin"), getAllUsers).post(authorize("admin"), userValidationRules, createUser)

router
  .route("/:id")
  .get(getUserById)
  .put(authorize("admin"), userValidationRules, updateUser)
  .delete(authorize("admin"), deleteUser)
\
module.exports
userValidationRules, updateUser
)
  .delete(authorize('admin'), deleteUser)

module.exports = router

