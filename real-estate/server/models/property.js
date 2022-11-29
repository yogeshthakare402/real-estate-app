
const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const addPropertySchema = new Schema({
    ppdId: String, 
    image: String,
    property: [String], 
    contact: String,
    area: Number, 
    views: {type: Number},
    status: {type: String, default: "Unsold"},
    daysLeft: {type:Number},
    users : {type :mongoose.Schema.Types.ObjectId, ref: "Users"}
 })

const addPropertyModel = mongoose.model("Property", addPropertySchema);
module.exports = addPropertyModel;