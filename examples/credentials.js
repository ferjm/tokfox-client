/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

/* exported Credentials */

var tokfox = require('../lib/tokfox.js');

var Credentials = (function CredentialsExample() {
  function c_get() {
    tokfox
      .setOptions({url: 'http://127.0.0.1:3000'})
      .execute(function(error, client) {
        if (error) {
          console.log('Oh, something bad happened!');
        } else {
          client
            .session
            .credential
            .get({})
            .execute(function(error, result) {
              if (error) {
                console.log('Oh, something bad happened!');
              } else {
                console.log('result is ' + JSON.stringify(result));
              }
          });
        }
    });
  }

  return {
    get: c_get
  };
})();

module.exports = Credentials;
