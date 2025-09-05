const mongoose = require("mongoose");

const extensionSchema = new mongoose.Schema({
  logo: { type: String },
  name: { type: String },
  description: { type: String },
  isActive: { type: Boolean },
}, { collection: "list" }); // <-- point to the 'list' collection

module.exports = mongoose.model("Extension", extensionSchema);
