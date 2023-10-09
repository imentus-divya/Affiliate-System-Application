const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique:true,
  },
  contarct: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  referralId: {
    type: Number,
    required: true,
  },

  // Add other fields as needed for your registration schema
});

const User = mongoose.model("User", userSchema);

module.exports = User;
