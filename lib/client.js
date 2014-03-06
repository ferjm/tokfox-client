/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

/* exported Client. */

var Request = require('./request.js');

function Client(api) {
  this.api = api;
  this.extend(this, api.methods || {}, api.resources || {});
}

Client.prototype = {
  generateHelper: function c_generateHelper(methodMeta) {
    var self = this;
    return function(parameters, body) {
      return self.newRequest(methodMeta, parameters, body);
    };
  },

  newRequest: function c_newRequest(methodMeta, parameters, resource) {
    return new Request(this.api, methodMeta, parameters, resource);
  },

  extend: function c_extend(root, methods, resources) {
    for (var methodName in methods) {
      root[methodName] = this.generateHelper(methods[methodName]);
    }
    for (var key in resources) {
      root[key] = root[key] || {};
      this.extend(
        root[key],
        resources[key].methods || {},
        resources[key].resources || {}
      );
    }
  }
};

module.exports = Client;
