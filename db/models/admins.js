const { model, Schema } = require("mongoose");

const adminSchema = new Schema({
  name: String,
  phone_number: String,
  telegram_id: Number,
  registed_at: {
    type: Date,
    value: new Date().getTime(),
  },
});

const adminModel = model("admins", adminSchema);

module.exports = adminModel;
