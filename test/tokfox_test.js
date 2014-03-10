var assert = require('chai').assert;

var tokfox = require('../lib/tokfox.js');

describe('TokFox client', function() {

  before(function() {
  });

  after(function() {
  });

  it('Useless test', function(done) {
    assert.isFunction(tokfox.createSession, '');
    done();
  });
});
