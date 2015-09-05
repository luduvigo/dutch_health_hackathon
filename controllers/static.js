var express = require("express")
var router = express.Router()

router.use(express.static(__dirname + "/../assets"))
router.get("/", function(req, res){
	res.sendfile("layouts/index.html")
})

router.get("/easy", function(req, res){
	res.sendfile("layouts/patient_easy.html")
})

router.get("/medium", function(req, res){
	res.sendfile("layouts/patient_medium.html")
})

router.get("/hard", function(req, res){
	res.sendfile("layouts/patient_hard.html")
})

module.exports = router
