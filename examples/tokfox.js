/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

/* exported TokFox */

var TokFox = (function TokFox() {
  function tf_hello() {
    console.log('Hello world');
  }

  return {
    hello: tf_hello
  };
})();

module.exports = TokFox;
