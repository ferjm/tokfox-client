/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

/* exported Hello */

var tokfox = require('../lib/tokfox.js');

var Hello = (function HelloExample() {
  function h_hello() {
    tokfox
      .setOptions({url: 'http://127.0.0.1:3000'})
      .execute(function(error, client) {
        if (error) {
          console.log('Oh, something bad happened!');
        } else {
          console.log('Hello world!');
        }
    });
  }

  return {
    hello: h_hello
  };
})();

module.exports = Hello;
