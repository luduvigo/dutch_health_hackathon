var Patient = require("../../models/patient")
var router = require("express").Router()

router.get("/", function (req, res, next){
	console.log("Patient get")
	Patient.find().sort('-insertiondate').exec(function(err, patients){
		if (err) {return next(err)}	
		res.json(patients)
	})
})

router.post("/", function(req, res, next){
	console.log("patient received")
	
	//var pitch = new Pitch({
	//	title: req.body.title,
	//	votes: 0,
    //    description: req.body.description,
    //    tag: req.body.tag,
    //    pictureurl: req.body.pictureurl,
    //    labname: req.body.labname
	//})
    
	var patient = new Patient({
		
    })
	patient.save(function (err, patient) {
		if(err) { return next(err) }
		res.json(201, patient)
	})
})

module.exports = router
