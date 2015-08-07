'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

module.exports = function () {
    gulp.task('copy-qwikly-local-pages', [], function () {
        gulp.src(['./qwikly-local-pages.json'])
            .pipe(gulp.dest('./www'))
            .pipe(reload({stream: true}));
    });
};