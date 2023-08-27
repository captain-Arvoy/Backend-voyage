const getAllProducts = async (req,res) =>{
  res.status(200).json({msg: "200: getAllProducts is fetched!"})
}
const getAllProductsTesting = async (req,res) =>{
  res.status(200).json({msg:"200: getAllProducts Testing successfull"});
}
module.exports = {getAllProducts,getAllProductsTesting};
