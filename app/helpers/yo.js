'use strict';

(function () {

  var request = require('request');
  var path = 'http://api.justyo.co/yoall/';
  var YO_API_TOKEN = process.env.YO_API_TOKEN;

  request.post({
    headers: {'content-type' : 'application/x-www-form-urlencoded'},
    url:     path,
    body:    YO_API_TOKEN
  }, function(error, response, body){
    console.log(body);
  });
}());