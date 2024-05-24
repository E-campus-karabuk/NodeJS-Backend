const express = require("express");
const router = express.Router();

const { authenticateUser } = require("../Middlewares/Auth");

const {
  sendMessage,
  getMessages,
  getConversation,
} = require("../Controllers/MessagingController");

router.post("/send", authenticateUser, sendMessage);
router.get("/get", authenticateUser, getMessages);
router.get("/conversation", authenticateUser, getConversation);

module.exports = router;
