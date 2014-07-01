'use strict';

(function() {

  /**
   * Import helpers ============================================================
   */
  var Worldcup = require('../app/helpers/worldcup');
  var Yo = require('../app/helpers/yo');

  // Public functions. =========================================================
  module.exports = function (app) {
    // Retrieve data from WorldCup endponit every minute.
    // If new event, then send POST request to phone numbers.
    var pingAPI = function pingAPI () {
      Worldcup.getEvents( function (err, data) {
        if (data.length > 0 && data.indexOf('goal') > 0) {
          Yo.yo( function (err, data) {
            // Success.
            console.log(data);
          });
        };
      });
    };

    pingAPI();
    var interval = setInterval( function() {
      pingAPI();
    }, 6000);

  	// Application routes ======================================================
  	app.get('/*', function (req, res) {
      res.sendfile('index.html', {'root': './public/views/'});
    });
  };

}());