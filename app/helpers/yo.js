'use strict';

(function () {

  var request = require('request');
  var path = ' http://api.justyo.co/yoall/';
  var YO_API_TOKEN = process.env.YO_API_TOKEN;

  module.exports = {
    yo: function yo (cb) {
      var qs = {
        api_token: YO_API_TOKEN
      };

      var opts = {
        uri: path,
        method: 'POST',
        timeout: 50000,
        followRedirect: true,
        maxRedirects: 10,
        qs: qs
      };

      request(opts, cb);
    }
  };
}());