var alexaApp = require('alexa-app');

var app = new alexaApp.app('aws-price-list');

app.launch(function(req, res) {
  var prompt = "I can consult the AWS Price List and tell you how much services on AWS will cost you";
  res.say(prompt).shouldEndSession(true);
});

module.exports = app;
