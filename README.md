# ML_Champignon

### request with nodejs-Request
<code>
var request = require('request');
var options = {
  'method': 'POST',
  'url': '127.0.0.1:5000/predict?cap-diameter=1372&cap-shape=2&gill-attachment=2&gill-color=10&stem-height=3.80746&stem-width=1545&stem-color=11&season=1.804273',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
</code>

### request with nodejs-Axios
<code>
const axios = require('axios');

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '127.0.0.1:5000/predict?cap-diameter=1372&cap-shape=2&gill-attachment=2&gill-color=10&stem-height=3.80746&stem-width=1545&stem-color=11&season=1.804273',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

</code>

### request with nodejs-Native
<code>
var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': '127.0.0.1',
  'port': 5000,
  'path': '/predict?cap-diameter=1372&cap-shape=2&gill-attachment=2&gill-color=10&stem-height=3.80746&stem-width=1545&stem-color=11&season=1.804273',
  'headers': {
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
</code>

