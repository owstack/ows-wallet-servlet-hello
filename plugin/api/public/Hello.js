'use strict';

angular.module('owsWalletPlugin.api.hello').factory('Hello', function (ApiMessage,
  /* @namespace owsWalletPlugin.api.hello */ HelloServlet,
  /* @namespace owsWalletPluginClient.api */ PluginAPIHelper,
  /* @namespace owsWalletPluginClient.api */ Session) {

  /**
   * Constructor.
   * @param {Object} configId - The configuration ID for the servlet.
   * @constructor
   */
  function Hello(configId) {
    var self = this;

    var servlet = new PluginAPIHelper(HelloServlet);
    var apiRoot = servlet.apiRoot();
    var config = servlet.getConfig(configId);

    /**
     * Public functions
     */

    /**
     * Say something.
     * @param {Object} message - What to say.
     * @return {Promise<Invoice>} A promise for the response.
     */
    this.say = function(message) {
      var request = {
        method: 'POST',
        url: apiRoot + '/hello/say',
        data: {
          config: config,
          data: {
            message: message
          }
        }
      }

      return new ApiMessage(request).send().then(function(response) {
        return response.data;

      }).catch(function(error) {
        $log.error('Hello.say(): ' + error.message + ', ' + error.detail);
        throw new Error(error.message);
        
      });
    };

    return this;
  };
 
  return Hello;
});
