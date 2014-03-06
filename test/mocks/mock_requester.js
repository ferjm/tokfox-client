/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

/* exported MockRequester */

/**
 * MockRequester reads the contents of a file given by filePath and
 * acts as request has returned contents as response body.
 *
 * @param {string} filePath Path of the file.
 */
function MockRequester(filePath) {
  this.filePath = filePath;
}

MockRequester.prototype = {
  /**
   * Configures request options before making a request.
   * @param {Object} options Options to configure.
   * @return {Object} Configured options.
   */
  configure: function tfp_configure(options) {
    return options;
  },

  /**
   * Makes a request with given options and invokes callback.
   * @param {Object} options Options.
   * @param {Function} callback Optional callback.
   */
  request: function tfp_request(options, callback) {
    if (callback && (typeof callback === 'function')) {
      this.wrapCallback(callback)(null, {}, {});
    }
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

module.exports = MockRequester;
