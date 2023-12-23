const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  not_received_messages: Number,
  name: String,
  phone_number: String,
  region: String,
  telegram_id: Number,
  referals: {
    type: Number,
    default: 0,
  },
  registed_at: {
    type: Date,
    value: new Date().getTime(),
  },
});

const userModel = model("users", userSchema);

module.exports = userModel;
