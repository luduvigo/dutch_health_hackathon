var db = require("../db")
var Activity = db.model("Activity", {
	patient:            {type: String, required: true},
    pictogram:           {type: String , required: true},
    day:                 {type: String },
    minutesday:          {type: Number, required: true},
    hour:                {type: String, required: true},
    minute:              {type: String, required: true},
    done:                {type: Boolean, required: true, default: false},
    donetime:            {type: Date}
})

module.exports = Activity
