var express = require("express")
var router = express.Router()

router.use(express.static(__dirname + "/../assets"))
router.get("/", function(req, res){
	res.sendfile("layouts/index.html")
})

router.get("/user1", function(req, res){
	res.sendfile("layouts/user1.html")
})

router.get("/user2", function(req, res){
	res.sendfile("layouts/user2.html")
})

router.get("/user3", function(req, res){
	res.sendfile("layouts/user3.html")
})

router.get("/user4", function(req, res){
	res.sendfile("layouts/user4.html")
})


router.get("/medium", function(req, res){
	res.sendfile("layouts/medium.html")
})

router.get("/pro", function(req, res){
	res.sendfile("layouts/patient_hard.html")
})

module.exports = router
