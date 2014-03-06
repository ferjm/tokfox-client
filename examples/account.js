/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

/* exported Invite */

var tokfox = require('../lib/tokfox.js'),
    fs = require('fs');

var Account = (function AccountExample() {
  function a_post() {
    var data = fs.readFileSync(__dirname + '/account.json');
    var body = null;
    try {
      body = JSON.parse(data);
    } catch (e) {
    }

    tokfox
      .setOptions({url: 'http://127.0.0.1:3000'})
      .execute(function(error, client) {
        if (error) {
          console.log('Oh, something bad happened!');
        } else {
          client
            .account
            .post({}, body || {})
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
    post: a_post
  };
})();

module.exports = Account;
