var Activity = require("../../models/activity")
var router = require("express").Router()

router.get("/", function (req, res, next){
	console.log("Activity get")
	Activity.find().sort('-insertiondate').exec(function(err, activities){
		if (err) {return next(err)}	
		res.json(activities)
	})
})

router.post("/", function(req, res, next){
	console.log("activity received")
	
	//var pitch = new Pitch({
	//	title: req.body.title,
	//	votes: 0,
    //    description: req.body.description,
    //    tag: req.body.tag,
    //    pictureurl: req.body.pictureurl,
    //    labname: req.body.labname
	//})
    
	var activity = new Activity({
		
    })
	activity.save(function (err, activity) {
		if(err) { return next(err) }
		res.json(201, activity)
	})
})

module.exports = router
