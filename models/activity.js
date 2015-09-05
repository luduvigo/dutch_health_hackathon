var db = require("../db")
var Activity = db.model("Activity", {
	patient:            {type: String, required: true},
    pictogram:           {type: String , required: true},
    day:                 {type: String },
    hour:                {type: Number , min: 0, max: 23, required: true},
    minute:              {type: Number , min: 0, max: 59, required: true},
    done:                {type: Boolean, required: true, default: false},
    donetime:            {type: Date}
})

module.exports = Activity
