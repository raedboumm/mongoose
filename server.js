const app = require("express")();
const mongoose = require("mongoose");
const port = 5000; //server port
app.use(require("express").json());

mongoose
  .connect(
    "mongodb+srv://kraken:kraken@cluster0.3vrdmwi.mongodb.net/first_try?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connected")); //link with database
app.use("/", require("./routes/clientroute"));
app.listen(port, (err) =>
  err ? console.error(err) : console.log("server listening on port", port)
);
