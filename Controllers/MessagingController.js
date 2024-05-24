const Messaging = require("../Models/messaging");
const Notification = require("../Models/notificationsModel");
const User = require("../Models/User/userMode");

const sendMessage = async (req, res) => {
  try {
    const user = req.user;
    const { receiver, message } = req.body;
    const newMessage = new Messaging({
      sender: user._id,
      receiver,
      message,
    });
    await newMessage.save();
    const userInfo = await User.findById(user);
    const Noti = await Notification.create({
      sender: user._id,
      type: "newMsg",
      title: "New Message",
      content: `New message from ${userInfo.firstName} ${userInfo.lastName}`,
      receiver,
      message: "You have a new message",
      status: "unread",
    });
    res.status(201).json({ newMessage, Noti });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const user = req.user;
    const messages = await Messaging.find({ sender: user }).populate("sender");
    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getConversation = async (req, res) => {
  try {
    const user = req.user;
    const { receiver } = req.body;
    const messages = await Messaging.find({
      $or: [
        { sender: user, receiver },
        { sender: receiver, receiver: user },
      ],
    }).populate("sender");
    res.status(200).json({ messages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { sendMessage, getMessages, getConversation };
