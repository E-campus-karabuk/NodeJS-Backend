const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Types = {
  systemUpdate: "systemUpdate:",
  requestUpdate: "requestUpdate",
  announcement: "announcement",
  seniorReport: "seniorReport",
  newMsg: "newMsg",
};

const notificationSchema = new Schema(
  {
    type: {
      type: [String],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "unread",
    },
    recevier: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notifications", notificationSchema);
module.exports.Types = Types;
