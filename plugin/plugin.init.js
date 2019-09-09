'use strict';

angular.module('owsWalletPlugin').config([
function($pluginConfigProvider) {

  /**
   * API routes for our service.
   * A match is made by searching routes in order, the first match returns the route.
   */
  $pluginConfigProvider.router.routes([
    { path: '/hello/say', method: 'POST', handler: 'doSay' }
  ]);

}])
.run([function() {

  owswallet.Plugin.ready(function() {

    // Do initialization here.

  });

}]);
