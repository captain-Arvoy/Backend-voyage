const mongoose = require("mongoose")
const student = new mongoose.Schema({
  Roll_No:{
    type: String,
    require: true,
    //add enum for aiml, BT, etc
  },
  name:{
    type: String,
    require: true
  }
});
