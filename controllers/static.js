var express = require("express")
var router = express.Router()

router.use(express.static(__dirname + "/../assets"))
router.get("/", function(req, res){
	res.sendfile("layouts/index.html")
})

router.get("/user", function(req, res){
	res.sendfile("layouts/patient_easy.html")
})

router.get("/expert", function(req, res){
	res.sendfile("layouts/patient_medium.html")
})

router.get("/pro", function(req, res){
	res.sendfile("layouts/patient_hard.html")
})

module.exports = router
