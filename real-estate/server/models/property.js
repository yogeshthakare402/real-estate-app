const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
    image: { type: JSON },
    property : {type: Array},
    contact : {type: Number, min:10},
    area : {type: Number},
    views : {type: Number},
    daysLeft : {type: Number},
    user : {type : Schema.Types.ObjectId, ref: "User"}
},{timestamps:true});

const propertyModel = mongoose.model("Properties", propertySchema);
module.exports = propertyModel;