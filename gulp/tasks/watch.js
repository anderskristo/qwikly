'use strict';

var gulp = require('gulp');

module.exports = function () {
    gulp.task('watch', [
        'build-compass',
        'build-templates',
        'build-js',
        'copy-fonts',
        'copy-qwikly-config',
        'copy-qwikly-local-pages'
    ], function () {
        gulp.watch('assets/js/**/*.js', ['build-js']);
        gulp.watch('assets/templates/**/*.html', ['build-templates']);
        gulp.watch('assets/sass/**/*.scss', ['build-compass']);
        gulp.watch('assets/fonts/**/*', ['copy-fonts']);
        gulp.watch('qwikly-config.json', ['copy-qwikly-config']);
        gulp.watch('qwikly-local-pages.json', ['copy-qwikly-local-pages']);
    });
};