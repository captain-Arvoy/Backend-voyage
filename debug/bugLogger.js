function bugLog(e){
  const fs = require("fs");
  const fileNames = fs.readdirSync("./debug/")//check files name
  fs.writeFile(`./debug/debug-log@${fileNames.length+1}.log`,`${e}`,()=>{
    console.log("error occured at the backend please check the debug logs at debug/ directory")
  }) 
}
module.exports = bugLog;
// const bugLog = async (e)=>{
//   // fs.open('')
// }
