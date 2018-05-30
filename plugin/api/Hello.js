'use strict';

angular.module('owsWalletPlugin.api').factory('Hello', function (ApiMessage, Session) {

  Hello.pluginId = 'org.openwalletstack.wallet.plugin.servlet.hello';

  /**
   * Constructor.
   * @param {Object} configId - The configuration ID for the servlet.
   * @constructor
   *
   * config = {}
   */
  function Hello(configId) {
    var self = this;

    var config = Session.getInstance().plugin.dependencies[Hello.pluginId][configId];
    if (!config) {
      throw new Error('Could not create instance of Hello, check plugin configuration');
    }

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
        url: '/hello/say',
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
