var Activity = require("../../models/activity")
var router = require("express").Router()

router.get("/", function (req, res, next){
	console.log("Activity get")
	Activity.find().sort('minutesday').exec(function(err, activities){
		if (err) {return next(err)}	
		
        console.log(activities)
        
        res.json(activities)
	})
})

router.post("/", function(req, res, next){
	console.log("activity received")
    
	var activity = new Activity({
        patient: req.body.patient,
        pictogram: req.body.pictogram,
        minutesday : req.body.minutesday,
        hour : req.body.hour,
        minute : req.body.minute
    })

    console.log(activity)

	activity.save(function (err, activity) {
		if(err) { return next(err) }
		res.json(201, activity)
	})
})

module.exports = router
