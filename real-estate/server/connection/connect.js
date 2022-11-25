
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

// DB connection
mongoose
  .connect(process.env.DB_URL || uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
  console.log("CONNECTED TO DATABASE");
})