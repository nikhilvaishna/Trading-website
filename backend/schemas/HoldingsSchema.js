const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  Avg: Number,
  Price: Number,
  net: String,
  day: String,
});

module.exports = { HoldingsSchema };
