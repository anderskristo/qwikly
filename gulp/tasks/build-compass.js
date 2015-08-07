'use strict';

var gulp            = exports.gulp = require('gulp'),
    buildCompass    = require(__base + 'helpers/build-compass');

module.exports = function(){
    return gulp.task('build-compass', function () {
        return buildCompass('assets/sass/');
    });
};