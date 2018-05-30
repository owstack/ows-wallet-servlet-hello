"use strict";angular.module("owsWalletPlugin",["gettext","ionic","ngLodash","owsWalletPluginClient","owsWalletPlugin.api","owsWalletPlugin.controllers","owsWalletPlugin.services"]),angular.module("owsWalletPlugin.api",[]),angular.module("owsWalletPlugin.controllers",[]),angular.module("owsWalletPlugin.services",[]),angular.module("owsWalletPlugin").config(function($pluginConfigProvider){$pluginConfigProvider.router.routes([{path:"/hello/say",method:"POST",handler:"doSay"}])}).run(function(){owswallet.Plugin.ready(function(){})}),angular.module("owsWalletPlugin").run(["gettextCatalog",function(gettextCatalog){}]),angular.module("owsWalletPlugin.api").service("doSay",function(System){var root={},REQUIRED_PARAMS=["data.message","config.text"];return root.respond=function(message,callback){var missing=System.checkRequired(REQUIRED_PARAMS,message.request.data);if(missing.length>0)return message.response={statusCode:400,statusText:"REQUEST_NOT_VALID",data:{message:"The request does not include "+missing.toString()+"."}},callback(message);var msg=message.request.data.message,helloReponse=(message.request.data.config.text,"You said '"+msg+"'\nThe dependency configuration text is '"+pluginConfig.text+"'");return message.response={statusCode:200,statusText:"OK",data:helloReponse},callback(message)},root});