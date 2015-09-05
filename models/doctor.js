var db = require("../db")
var Doctor = db.model("Doctor", {
	doctorname:            {type: String, required: true},
	patients:               {type: [String]}
})

module.exports = Doctor
