const express = require("express");
const bodyParser = require("body-parser");
// const {authVerify} = require("./Bcrypt/authVerify");
const Property = require('../models/property');
const User = require('../models/user');
// const cloudinary = require('cloudinary').v2;
const router = express.Router();

router.use(bodyParser.json());

router.get('/property', async(req, res) => {
    try {
        console.log("I am inside get property");
        const {PageSize = 5} = req.params;
        //here we are rendering the image giveing it in ressponse
        const property = await Property.find().populate('users');
        res.json({
            status: "Sucess",
            property
        })
        
        
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

router.get('/property/:ppdId', async(req, res) => {
    try {
        console.log("I am inside get Property with PPDID")
        console.log(req.params)
        //here we are rendering the image giveing it in ressponse
        const property = await Property.findOne({ppdId: req.params.ppdId});
        if(property){
            res.json({
                status: "Sucess",
                property
            })
        }else {
            res.json({
                status: "Failed",
                message : "Property Not Found"
            })
        }
    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})

module.exports = router;