'use strict';

var gulp = require('gulp');

module.exports = function () {
    gulp.task('deploy', [
        'build-compass',
        'build-templates',
        'build-js-min',
        'copy-fonts'
    ])
};