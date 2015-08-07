'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

module.exports = function () {
    gulp.task('copy-qwikly-config', [], function () {
        gulp.src(['./qwikly-config.json'])
            .pipe(gulp.dest('./www'))
            .pipe(reload({stream: true}));
    });
};