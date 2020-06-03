// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204
app.use("", function(req,res,next) {
  console.log(req.method + " " + req.path
  + " - " + req.ip);
  next();
})
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
//use body-parser for all path


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/whoami", (req,res) => {
  res.json(
    {"ipaddress": req.ip,
     "language": req.get("Accept-Language"),
     "software": req.get("User-Agent")});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
