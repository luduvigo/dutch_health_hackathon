var express = require("express")
var router = express.Router()

router.use(express.static(__dirname + "/../assets"))
router.get("/", function(req, res){
	res.sendfile("layouts/index.html")
})

router.get("/patient", function(req, res){
	res.sendfile("layouts/patient.html")
})
module.exports = router
