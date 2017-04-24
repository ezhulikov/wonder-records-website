'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var wintersmith = require('wintersmith');

var env = wintersmith('./wintersmith.json');
var scssPath = './_scss/*.scss';

gulp.task('scss', function() {
  return gulp.src(scssPath)
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest('./contents/css'));
});

gulp.task('scss:watch', function () {
  gulp.watch(scssPath, ['scss']);
});

gulp.task('build', ['scss'], function() {
    return env.build();
});

gulp.task('preview', ['scss:watch'], function() {
    return env.preview(function(error, preview) {
        if (error) throw Error();
    });
});
