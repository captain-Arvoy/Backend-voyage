const express = require("express")
const router = express.Router()
const app = express()
const {getAllProducts,getAllProductsTesting} = require("../controllers/product.js")
router.route("/").get(getAllProducts)
router.route("/testing").get(getAllProductsTesting)
module.exports = router;
