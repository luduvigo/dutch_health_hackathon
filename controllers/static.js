var express = require("express")
var router = express.Router()

router.use(express.static(__dirname + "/../assets"))
router.get("/", function(req, res){
	res.sendfile("layouts/index.html")
})

router.get("/user/1", function(req, res){
	res.sendfile("layouts/user.html")
})

router.get("/user/2", function(req, res){
	res.sendfile("layouts/user.html")
})

router.get("/user/3", function(req, res){
	res.sendfile("layouts/user.html")
})

router.get("/user/4", function(req, res){
	res.sendfile("layouts/user.html")
})


router.get("/expert", function(req, res){
	res.sendfile("layouts/patient_medium.html")
})

router.get("/pro", function(req, res){
	res.sendfile("layouts/patient_hard.html")
})

module.exports = router
