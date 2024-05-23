const express = require("express");
const router = express.Router();

const {
  getNotificationsForUser,
  updateStatus,
} = require("../Controllers/NotificationController");

router.get("/", getNotificationsForUser);
router.put("/:id", updateStatus);

module.exports = router;
