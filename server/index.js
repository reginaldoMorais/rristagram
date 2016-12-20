var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.dev.config');

var app = express();
var compile = webpack(config);

app.use(require('webpack-dev-middleware')(compile, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compile));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../view/index.html'));
})

app.listen(8080, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('\n\nListening at http://localhost:8080/\n===================================');
})
