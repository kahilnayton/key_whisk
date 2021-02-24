const express = require("express");
var request = require("request");

const app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

const axios = require("axios");

const token = "1432ef6f27d007234dd11a81cee32630044a023d";

app.get("/post", function (req, res) {
  var headers = {
    Accept: "application/vnd.github.everest-preview+json",
    Authorization: "token 1432ef6f27d007234dd11a81cee32630044a023d",
  };

  var dataString = '{"event_type": my_bash_script"}';

  var options = {
    url: "https://api.github.com/repos/kahilnayton/key_whisk/dispatches",
    method: "POST",
    headers: headers,
    body: dataString,
  };

  function callback(error, response, body) {
    console.log('hi')
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  }

  request(options, callback);

  res.send("done");
});

app.listen(5000);
