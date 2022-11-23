const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connect = require("./connection/connect");
const propertyListRoutes = require("./routes/property")

const fileUpload = require("express-fileupload");

const app = express();
// app.use(express.json());
// app.use(express.urlencoded());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true}));


//editing for filesize
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// use fileupload
app.use(fileUpload({
    useTempFiles:true
}))

app.use("/property",propertyListRoutes)

app.listen(3000, ()=>console.log('Server is running at 3000'))
