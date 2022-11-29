

// let value = 1200;
const mongoose = require("mongoose");
Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
  userid: {
    type: String,
    unique: true
  },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  // property : [{type : mongoose.Schema.Types.ObjectId, ref: "AddProperty"}]
});
const userModel  = mongoose.model("User", userSchema);
module.exports = userModel;
