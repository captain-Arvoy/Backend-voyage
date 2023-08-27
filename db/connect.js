const mongoose = require("mongoose")
const connectDB = async (uri) =>{
  try {
    mongoose.connect(uri);
  } catch(e){
    console.error("Error: "+e)
  }
}
module.exports = connectDB;
