const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../Middlewares/Auth");
const {
  getNotificationsForUser,
  updateStatus,
  changeStatusOfAllNotifications,
} = require("../Controllers/NotificationController");

router.get("/", authenticateUser, getNotificationsForUser);
router.put("/:id", updateStatus);
router.put("/status", authenticateUser, changeStatusOfAllNotifications);

module.exports = router;
