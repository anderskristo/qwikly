'use strict';

var gulp = exports.gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    compass = require('gulp-compass');

module.exports = function (path) {
    return gulp.src(path)
        .pipe(compass({
            config_file: 'config.rb',
            css: 'www/css/',
            sass: path
        }))
        .pipe(reload({stream: true}));
};