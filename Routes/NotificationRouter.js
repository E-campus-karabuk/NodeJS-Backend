const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../Middlewares/Auth");
const {
  getNotificationsForUser,
  updateStatus,
} = require("../Controllers/NotificationController");

router.get("/", authenticateUser, getNotificationsForUser);
router.put("/:id", updateStatus);

module.exports = router;
