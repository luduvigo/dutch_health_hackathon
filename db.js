var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/dutchhealthhackathon", function(req, res){
	console.log("Mongo DB connected")
})
module.exports = mongoose
