const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});
const Client = mongoose.model("client", clientSchema);
module.exports = Client; // client schema object for client instance creation and destruction of objects created by Mongoose module methods
