'use strict';

var gulp = require('gulp');

module.exports = function () {
    gulp.task('watch', [
        'build-compass',
        'build-templates',
        'build-js',
        'copy-fonts'
    ], function () {
        gulp.watch('assets/js/**/*.js', ['build-js']);
        gulp.watch('assets/templates/**/*.html', ['build-templates']);
        gulp.watch('assets/sass/**/*.scss', ['build-compass']);
    });
};