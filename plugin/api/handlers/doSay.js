'use strict';

angular.module('owsWalletPlugin.api').service('doSay', function(System) {

	var root = {};

	var REQUIRED_PARAMS = [
		'data.message',
		'config.text'
	];

  root.respond = function(message, callback) {
		// Check required parameters.
		var missing = System.checkRequired(REQUIRED_PARAMS, message.request.data);
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
    var msg = message.request.data.message;
    var text = message.request.data.config.text;

    // Set a response and reply.
    var helloReponse = 'You said \'' + msg + '\'\n' + 'The dependency configuration text is \'' + pluginConfig.text + '\'';

    message.response = {
      statusCode: 200,
      statusText: 'OK',
      data: helloReponse
    };
		return callback(message);

	};

  return root;
});
