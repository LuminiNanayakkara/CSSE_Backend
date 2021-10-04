const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companyDetails = new Schema(
  {
    name: { type: String, required: true },
    comNumber: { type: String },
    email: { type: String },
    date: { type: String },
    expecteddate: { type: String },
    orderType: { type: String, required: true },
    description: { type: String },
    quantity: { type: String, required: true },
    area: { type: String, required: true },
    district: { type: String, require: true },
    totalPrice: { type: String },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companyDetails);

module.exports = Company;
