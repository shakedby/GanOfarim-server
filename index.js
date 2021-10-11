const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const Routes = require("./routes/routes");
require("dotenv").config();

const app = express();
const mongoose = require("mongoose");
const { getSystemErrorMap } = require("util");
const mongo =
  "mongodb+srv://shaked:shakedrazi@cluster0.fdtuh.mongodb.net/Database?retryWrites=true&w=majority";
try {
  mongoose.connect(
    mongo,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected");
    }
  );
} catch (error) {
  console.log("could not connect");
}
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", Routes);
const port = 5000;
app.listen(port, () => {
  console.log("Server initiated succesfully");
});
// app.listen(config.port, () =>
//   console.log("App is listening on url http://localhost:" + config.port)
// );
