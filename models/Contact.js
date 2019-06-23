const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  type: {
    type: String,
    default: "Personal"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Contact", ContactSchema);
