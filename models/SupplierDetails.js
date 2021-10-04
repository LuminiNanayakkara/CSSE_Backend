const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supplierDetails = new Schema({
  name: { type: String, required: true },
  supID: { type: String },
  email: { type: String },
  date: { type: String },
  goodsType: { type: String, required: true },
  description: { type: String },
  quantity: { type: String, required: true },
  area: { type: String, required: true },
  district: { type: String, require: true },
  totalPrice: { type: String },
});

const supplier = mongoose.model("supplier", supplierDetails);

module.exports = supplier;
