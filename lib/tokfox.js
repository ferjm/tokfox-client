/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

/* exported tokfox */

var Client = require('./client.js'),
//    Requester = require('../test/mocks/mock_requester.js'),
    Requester = require('./requester.js'),
    fs = require('fs');

function TokFox() {
  this.options = null;
  this.requester = new Requester();
}

/**
 * Default base URL for TokFox API.
 */
TokFox.DEFAULT_BASE_URL = 'http://127.0.0.1:3000';

TokFox.prototype = {
  /**
   * Set options.
   *
   * @param {Object} options Options object.
   */
  setOptions: function tf_options(options) {
    this.options = options;

    return this;
  },

  /**
   * Get a proxy client to the TokFox API.
   *
   * @param  {Function} callback
   */
  execute: function tf_execute(callback) {
    var createClient = function(error, data) {
      var client = null;
      var api = null;
      if (!error && data) {
        // We should find another way of gettin the API object. Sent from the
        // server maybe.
        data = fs.readFileSync(__dirname + '/tokfox.json');
        try {
          api = JSON.parse(data);
        } catch (e) {
        }
        client = new Client(api || {});
      }
      if (callback && (typeof callback === 'function')) {
        callback(error, client);
      }
    };

    this.requester.request(
      {uri: this.createUrl(), json: true},
      createClient
    );
  },

  /**
   * Create the URL.
   *
   * return {string} URL endpoint.
   */
  createUrl: function tf_createUrl() {
    return this.options.url || TokFox.DEFAULT_BASE_URL;
  }
};

var tokfox = new TokFox();

module.exports = tokfox;
