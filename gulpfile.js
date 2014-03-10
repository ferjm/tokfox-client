var pkg = require('./package.json');

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('lint', function() {
  gulp.src(['**/*.js', '!dist/**', '!node_modules/**', '!test/**'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  gulp.src('test/*.js')
      .pipe(mocha({ reporter: 'spec' }));
});

gulp.task('build-uglified', function() {
  gulp.src('lib/*.js')
    .pipe(rename(pkg.name + '-' + pkg.version + '.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', function() {
  gulp.src('lib/*.js')
    .pipe(rename(pkg.name + '-' + pkg.version + '.js'))
    .pipe(gulp.dest('./dist'));
});

// The default task
gulp.task('default', ['lint', 'test', 'build', 'build-uglified']);

