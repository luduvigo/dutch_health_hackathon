var db = require("../db")
var Patient = db.model("Patient", {
	patient_name:            {type: String, required: true},
    age:                     {type: Number, required: true},
    description:             {type: String,    required: true},
    picture_url:             {type: String, required: true}
})

module.exports = Patient
