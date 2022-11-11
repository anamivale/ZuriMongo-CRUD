const mongoose = require("mongoose")

const user = new mongoose.Schema({
  title: {
    type: String,
  },
  time: {
    type: Date,
  },
  price: {
    type: Number,
  },
  date: {
    type: Date,
  },
})

module.exports = mongoose.model("user", user)
