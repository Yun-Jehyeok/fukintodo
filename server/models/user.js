const moment = require("moment");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  login_way: {
    type: String,
    required: true,
    default: "email",
  },
  phone: {
    type: String,
  },
  register_date: {
    type: Date,
    default: moment().format("MMMM DD, YYYY"),
  },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "todo" }],
});

const User = mongoose.model("user", UserSchema);

module.exports = { User };
