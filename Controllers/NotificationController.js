const Notification = require("../Models/notificationsModel");

const getNotificationsForUser = async (req, res) => {
  try {
    const user = req.user;
    const noti = await Notification.find({ recevier: user });

    res.status(200).json({ noti });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const noti = await Notification.findByIdAndUpdate(
      id,
      { status: "read" },
      { new: true }
    );
    res.status(200).json({ noti });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getNotificationsForUser, updateStatus };
