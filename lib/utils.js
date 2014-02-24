/* -*- Mode: js; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- /
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

var url = require('url');

module.exports = {
  createUri: function u_createUri(root, paths, parameters) {
    var path = '/' + paths.join('/').split('/').filter(function(p) {
      return !!p;
    }).join('/');

    var fullPath = url.resolve(root, path);

    return fullPath;
  }
};
