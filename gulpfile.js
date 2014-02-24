var gulp = require('gulp');
var gulputil = require('gulp-util');
var tokfox = require('./examples/tokfox.js');
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
