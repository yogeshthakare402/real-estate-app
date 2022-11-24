// import all the necessary packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
// we are using port 8080
const port = process.env.PORT || 8080;


const addPropertyRoutes = require("./routes/addProperty");

const app = express();
// const uri = process.env.MONGODB_URI;
const localURI = "mongodb://localhost/real_estate_app";

// DB connection
mongoose
  .connect(localURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });

app.use(cors());

// middleware to convert our request data into JSON format
app.use(bodyParser.json());

// include the addPropertyRoutes
app.use("/", addPropertyRoutes);

// start the server in the port 3000
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
