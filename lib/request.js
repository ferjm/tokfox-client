/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

/* exported Request. */

//var Requester = require('../test/mocks/mock_requester.js'),
var Requester = require('./requester.js'),
    utils = require('./utils.js');

function Request(api, methodMeta, parameters, resource) {
  this.requester = new Requester();
  this.api = api;
  this.methodMeta = methodMeta;
  this.parameters = parameters;
  this.resource = resource;
}

/**
 * Default base URL for TokFox API.
 */
Request.BASE_URL = 'http://127.0.0.1:3000';

Request.prototype = {
  execute: function r_execute(callback) {
    var options = this.createPayload();
    console.log(JSON.stringify(options));
    // if (callback && (typeof callback === 'function')) {
    //   callback();
    // }
    this.requester.request(options, callback);
  },

  createPayload: function r_createPayload() {
    return {
      uri: this.createMethodUri(this.parameters),
      path: this.createPath(this.parameters),
      method: this.methodMeta.httpMethod,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.resource) || '',
      json: true
    };
  },

  createMethodUri: function r_createMethodUri(queryParameters) {
    var p = [this.api.basePath, this.methodMeta.path];
    queryParameters = queryParameters || {};

    return utils.createUri(this.api.rootUrl, p, queryParameters);
  },

  createPath: function r_createPath(queryParameters) {
    var p = [this.api.basePath, this.methodMeta.path];
    queryParameters = queryParameters || {};

    return utils.createUri('/', p, queryParameters);
  }
};

module.exports = Request;
