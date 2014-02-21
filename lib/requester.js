/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

/* exported Requester */

var request = require('request');

/**
 * Default TokFox requester constructor.
 */
function Requester() {
}

Requester.prototype = {
  /**
   * Configures request options before making a request.
   * @param {Object} options Options to configure.
   * @return {Object} Configured options.
   */
  configure: function tfp_configure(options) {
  },

  /**
   * Makes a request with given options and invokes callback.
   * @param {Object} options Options.
   * @param {Function} callback Optional callback.
   */
  request: function tfp_request(options, callback) {
    options = this.configure(opts);
    request(options, this.wrapCallback(callback));
  },

  wrapCallback: function tfp_wrapCallback(callback) {
    return function(error, response, body) {
     if (error || !body) {
       if (callback && (typeof callback === 'function')) {
         return callback(error, body, response);
       }
     }
     try {
       body = JSON.parse(body);
     } catch (err) {
     }

     if (body && body.error) {
       // handle single request errors
       error = body.error;
       body = null;
     }
     if (callback && (typeof callback === 'function')) {
       return callback(error, body, response);
     }
   };
 }
};

module.exports = Requester;
