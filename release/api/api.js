'use strict';

angular.module('owsWalletPlugin.api').factory('Hello', function (HelloServlet, ApiMessage, PluginAPIHelper, Session) {

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
     * Create a new invoice.
     * @param {Object} data - Payment request data.
     * @return {Promise<Invoice>} A promise for the invoice.
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
        },
        responseObj: String
      }

      return new ApiMessage(request).send();
    };

    return this;
  };
 
  return Hello;
});

'use strict';

angular.module('owsWalletPlugin.api').constant('HelloServlet', 
{
  id: 'org.openwalletstack.wallet.plugin.servlet.hello'
});
