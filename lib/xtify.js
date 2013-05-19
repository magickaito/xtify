var _apiKey = "";
var _appKey = "";
var request = require('request');

function log(message)
{
	console.log("Xtify:" + message);
}

function setup(apiKey, appKey)
{
	log("set apiKey:" + apiKey);
	log("set appKey:" + appKey);
	_apiKey =  apiKey;
	_appKey = appKey;
}

function push(arrayOfXids, subject, message, badgeCount, callback)
{	
	log("prepare to push subject: " + subject + ", message: " + message + " to xids:" + arrayOfXids);
	var message = {"apiKey":_apiKey,"appKey":_appKey,"xids":arrayOfXids,"hasTags":[],"notTags":[],"sendAll":false,"content":{"subject":subject,"message":message,"action":{"type":"DEFAULT","data":"","label":""},"rich":null,"payload":null,"sound":"","badge":badgeCount,"actionCategories":""}};
	var options = {
	  uri: 'http://api.xtify.com/2.0/push/',
	  method: 'POST',
	  json: message
	};

	request(options, function (error, response, body) {
	  if (!error && response.statusCode == 202) {
	    log("Pushed succesfully.");
	    callback(null);
	  }
	  else
	  {
	  	log("Failed to push - status code: " + response.statusCode + ", error: " + error);
	  	callback(error);
	  }
	});
}

module.exports.setup = setup;
module.exports.push = push;