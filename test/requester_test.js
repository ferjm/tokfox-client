var assert = require('chai').assert;

var Requester = require('../lib/requester.js');

describe('Tokfox requester', function() {
  var requester;

  before(function() {
    requester = new Requester();
  });

  after(function() {
    requester = null;
  });

  it('Useless test', function(done) {
    assert.isFunction(requester.request, '');
    done();
  });
});
