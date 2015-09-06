var express = require("express")
var bodyParser = require("body-parser")
var Activity = require("./models/activity")

var favicon = require('serve-favicon');

var app = express();
app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use("/api/activities", require("./controllers/api/activities"))
app.use(require("./controllers/static"))

app.listen(process.env.PORT || 8080, function(){
      console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

