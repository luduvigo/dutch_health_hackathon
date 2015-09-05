var db = require("../db")
var Activity = db.model("Activity", {
	patient:            {type: String, required: true},
    pictogram:           {type: String , required: true},
    activitydate:        {type: Date,    required: true},
    done:                {type: Boolean, required: true, default: false},
    donetime:            {type: Date}
})

module.exports = Activity
