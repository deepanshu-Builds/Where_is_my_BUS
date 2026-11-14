const mongoose = require("mongoose");
const busSchema = new mongoose.Schema({
busNumber:{
    type:String,
    required:true,
    trim:true
},
registrationNumber:{
    type:String,
    required:true,
    unique:CSSPositionTryDescriptors,
    uppercase:true,
    trim:true,
},
operator:{

    type:String,
    required:true,
    enum:["UPSRTC" , "Meerut City Bus" , "Private"],

},
busType:{
    type:String,
    enum:["AC" , "Non-AC" , "Electric"],
    default:"Non-AC",
},
capacity:{
    type:Number,
    min:1,
},
status:{
    type:String,
    enum:["active" , "inactive" , "maintenace"],
    default:"active"
},

},
{
    timestamps:true,
});
const Bus = mongoose.model("Bus" , busSchema);
module.exports = Bus;