'use strict';

(function () {

  var request = require('request');
  var path = 'http://api.justyo.co/yoall/';
  var YO_API_TOKEN = process.env.YO_API_TOKEN;

  // content-type application/x-www-form-urlencoded

  module.exports = {
    yo: function yo () {
      request.post(path).form({api_token: YO_API_TOKEN});
    }
  };
}());