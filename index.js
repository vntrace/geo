var fs = require('fs');
var request = require('request');

/*
 * freegeoip.net is a public RESTful web service API for searching geolocation of IP addresses and host names.
 * Reference https://github.com/fiorix/freegeoip
 */
exports.geo = function(ip_or_domain, cb) {
	/*Base freegeoip url*/ 
	var geoApiUrl = "http://api.9shots.ws/ip2location";
	geoApiUrl += "/json/" + ip_or_domain;

	/*
	 * Request location from ip address
	 */
	request(geoApiUrl, function(error, response, body){

		var location = {};

		if (!error && response.statusCode == 200) {
			location = JSON.parse(body);
		}

		/*Return callback*/
		cb(location);
	});
};