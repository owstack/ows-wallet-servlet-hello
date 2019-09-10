'use strict';

angular.module('owsWalletPlugin.api.hello', []).namespace().constant('HelloServlet', 
{
  id: 'org.openwalletstack.wallet.plugin.servlet.hello'
});

'use strict';

angular.module('owsWalletPlugin.api.hello').factory('Hello', [
  'ApiMessage',
  'owsWalletPluginClient.api.ApiError',
  'owsWalletPlugin.api.hello.HelloServlet',
  'owsWalletPluginClient.api.PluginApiHelper',
  'owsWalletPluginClient.api.Session',
function (ApiMessage, ApiError, HelloServlet, PluginApiHelper, Session) {

  /**
   * Constructor.
   * @param {Object} configId - The configuration ID for the servlet.
   * @constructor
   */
  function Hello(configId) {
    var self = this;

    var servlet = new PluginApiHelper(HelloServlet);
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
        throw new ApiError(error);
        
      });
    };

    return this;
  };
 
  return Hello;
}]);
