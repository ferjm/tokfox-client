/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

/* exported Examples */

var tokfox = require('../lib/tokfox.js');

var Examples = (function Examples() {
  function tf_hello() {
    console.log('Hello world');
  }

  function tf_createAccount() {
    tokfox.createAccount(
      'msisdn',
      '+34667447798',
      'http://arandomurl.com',
      function(error, result) {
        console.log('result is ' + JSON.stringify(result));
        console.log('error is ' + JSON.stringify(error));
    });
  }

  function tf_getAccounts() {
    tokfox.getAccounts(
      function(error, result) {
        console.log('result is ' + JSON.stringify(result));
        console.log('error is ' + JSON.stringify(error));
    });
  }

  function tf_createSession() {
    tokfox.createSession(
      null,
      null,
      function(error, result) {
        console.log('result is ' + JSON.stringify(result));
        console.log('error is ' + JSON.stringify(error));
    });
  }

  function tf_invite() {
    tokfox.invite(
      'msisdn',
      '+34667447798',
      '1_MX40NDYzMjUyMn5-U3VuIE1hciAwOSAwMzo1NjoxNSBQRFQgMjAxNH4wLjk0MDkzNDh-',
      function(error, result) {
        console.log('result is ' + JSON.stringify(result));
        console.log('error is ' + JSON.stringify(error));
    });
  }

  function tf_acceptInvitation() {
    tokfox.acceptInvitation(
      1394362678486,
      function(error, result) {
        console.log('result is ' + JSON.stringify(result));
        console.log('error is ' + JSON.stringify(error));
    });
  }


  return {
    hello: tf_hello,
    createAccount: tf_createAccount,
    getAccounts: tf_getAccounts,
    createSession: tf_createSession,
    invite: tf_invite,
    acceptInvitation: tf_acceptInvitation
  };
})();

module.exports = Examples;
