'use strict';

angular.module('owsWalletPlugin.apiHandlers').service('doSay', function(
  /* @namespace owsWalletPluginClient.api */ Utils) {

	var root = {};

	var REQUIRED_DATA = [
		'data.message',
		'config.text'
	];

  root.respond = function(message, callback) {
		// Check required parameters.
		var missing = Utils.checkRequired(REQUIRED_DATA, message.request.data);
    if (missing.length > 0) {
	    message.response = {
	      statusCode: 400,
	      statusText: 'REQUEST_NOT_VALID',
	      data: {
	      	message: 'The request does not include ' + missing.toString() + '.'
	      }
	    };
			return callback(message);
    }

    // Grab the request data.
    var msg = message.request.data.data.message;
    var text = message.request.data.config.text;

    // Set a response and reply.
    var helloResponse = {
    	a: 'Greetings from the Hello servlet!',
    	b: 'You said \'' + msg + '\'',
    	c: 'The configuration text is \'' + text + '\''
    };

    message.response = {
      statusCode: 200,
      statusText: 'OK',
      data: helloResponse
    };
		return callback(message);

	};

  return root;
});
