const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },

  description: {
    type: String,
    required: true,
  },
});

const UserSchema = mongoose.model("userSchema", userSchema);
module.exports = UserSchema;
