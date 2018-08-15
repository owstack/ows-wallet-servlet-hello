"use strict";angular.module("owsWalletPlugin",["gettext","ngLodash","owsWalletPluginClient","owsWalletPlugin.apiHandlers","owsWalletPlugin.services"]),angular.module("owsWalletPlugin.apiHandlers",[]),angular.module("owsWalletPlugin.services",[]),angular.module("owsWalletPlugin").config(["$pluginConfigProvider",function($pluginConfigProvider){$pluginConfigProvider.router.routes([{path:"/hello/say",method:"POST",handler:"doSay"}])}]).run(function(){owswallet.Plugin.ready(function(){})}),angular.module("owsWalletPlugin").run(["gettextCatalog",function(gettextCatalog){}]),angular.module("owsWalletPlugin.apiHandlers").service("doSay",["owsWalletPluginClient.api.Utils",function(Utils){var root={},REQUIRED_DATA=["data.message","config.text"];return root.respond=function(message,callback){var missing=Utils.checkRequired(REQUIRED_DATA,message.request.data);if(missing.length>0)return message.response={statusCode:400,statusText:"REQUEST_NOT_VALID",data:{message:"The request does not include "+missing.toString()+"."}},callback(message);var msg=message.request.data.data.message,text=message.request.data.config.text,helloResponse={a:"Greetings from the Hello servlet!",b:"You said '"+msg+"'",c:"The configuration text is '"+text+"'"};return message.response={statusCode:200,statusText:"OK",data:helloResponse},callback(message)},root}]);