'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    concat      = require('gulp-concat'),
    sourceMaps  = require('gulp-sourcemaps'),
    uglify      = require('gulp-uglify'),
    getPaths    = require(__base + 'helpers/get-paths');

module.exports = function () {
    gulp.task('copy-fonts', [], function () {
        gulp.src(['./assets/fonts/**/*']).pipe(gulp.dest('./www/fonts'));
    });
};