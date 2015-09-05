var db = require("../db")
var Activity = db.model("Activity", {
	pictogram:            {type: String , required: true},
    activitydate:        {type: Date,    required: true},
    done:           {type: Boolean, required: true, default: false}
})

module.exports = Activity
