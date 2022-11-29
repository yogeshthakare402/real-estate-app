let express = require('express');
// let multer = require('multer');
let mongoose = require('mongoose');
let router = express.Router();
let User = require("../models/user");
let Property = require('../models/property');

router.post("/property", async (req, res) => {
    try {
        console.log("this is req.body" + req.body + "Checkthis")
        const ppd_id = "PPD" + Math.floor((Math.random() * 9999) + 999);
        const views = parseInt(Math.random() * 30);
        const daysLeft = parseInt(Math.random() * 50);

        console.log(req.body);
        const property = await Property.create({
            ppdId: ppd_id, 
            image: '',
            property: req.body.values.property, 
            contact: req.body.values.mobile,
            area: req.body.values.area, 
            views: views,
            daysLeft: daysLeft,
        });

        res.status(200).json({
            status: "Success",
            property
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

module.exports = router;