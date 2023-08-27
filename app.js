require("dotenv").config()
const express = require("express")
const bugLog = require("./debug/bugLogger.js")
const app = express()
const connectDB = require("./db/connect.js")
const port = process.env.PORT || 5000
const product_route = require("./routes/router.js")
//middleware
app.use("/api/products",product_route)
app.listen(port,async ()=>{
  try{
    await connectDB(process.env.MONGODB_URL);
    console.log("Connection to DB successful")
    console.log(`Listening on port ${port}`)
  } catch(e){
    bugLog(e)
    // console.log ("error: "+e)
  }
})

