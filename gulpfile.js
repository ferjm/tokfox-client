var gulp = require('gulp');
var gulputil = require('gulp-util');
var browserify = require('gulp-browserify');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('lint', function() {
  gulp.src(['**/*.js', '!dist/**', '!node_modules/**', '!test/**'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  gulp.src('test/*.js')
      .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('browserify', function() {
    gulp.src(['examples/tokfox.js'])
	.pipe(browserify())
	.pipe(gulp.dest('./dist/'));
});

// The default task
gulp.task('default', ['lint', 'test', 'browserify']);

var Hello = require('./examples/hello.js');
gulp.task('hello', function() {
  Hello.hello();
});

var Credentials = require('./examples/credentials.js');
gulp.task('credentials', function() {
  Credentials.get();
});

var Invite = require('./examples/invite.js');
gulp.task('invite', function() {
  Invite.post();
});

var Account = require('./examples/account.js');
gulp.task('account', function() {
  Account.post();
});
