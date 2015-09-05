var Activity = require("../../models/activity")
var router = require("express").Router()

router.get("/", function (req, res, next){
	console.log("Activity get")
	Activity.find().exec(function(err, activities){
		if (err) {return next(err)}	
		res.json(activities)
	})
})

router.post("/", function(req, res, next){
	console.log("activity received")
    
	var activity = new Activity({
        patient: req.body.patient,
        pictogram: req.body.pictogram,
        activitydate: req.body.activitydate
    })

    console.log(activity)

	activity.save(function (err, activity) {
		if(err) { return next(err) }
		res.json(201, activity)
	})
})

module.exports = router
