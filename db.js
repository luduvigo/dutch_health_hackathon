var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/dutchhealthhackathon1", function(req, res){
	console.log("Mongo DB connected")
})
module.exports = mongoose
