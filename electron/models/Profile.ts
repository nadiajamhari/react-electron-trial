const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

module.exports = model("Profile", profileSchema);
