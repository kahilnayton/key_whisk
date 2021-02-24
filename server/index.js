const express = require("express");
const app = express();
const request = require("request");
const http = require("http");
const config = require("./config");
const PORT = config.PORT;
console.log(config);

app.get("/", function (req, res) {
  res.send("hello world");
});

const axios = require("axios");

app.get("/trigger", function (req, res) {
  const headers = {
    Accept: "application/vnd.github.everest-preview+json",
    Authorization: `token ${config.GITHUB_TOKEN}`,
    'User-agent': 'node.js'
  };

  const dataString = '{"event_type": "my_custom_webhook"}';

  const options = {
    url: "https://api.github.com/repos/kahilnayton/key_whisk/dispatches",
    method: "POST",
    headers: headers,
    body: dataString,
  };

  function callback(error, response, body) {
    console.log("test");
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
  }

  request(options, callback);

  res.send("done");
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.warn(`Server is running on ${PORT}`);
});
