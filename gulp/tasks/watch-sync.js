'use strict';

var gulp = require('gulp');

module.exports = function () {
    gulp.task('watch-sync', [
        'build-compass',
        'build-templates',
        'build-js',
        'copy-fonts'
    ], function () {
        browserSync.init({
            notify: false,
            port: 8111,
            proxy: '127.0.0.1:8666'
        });

        gulp.watch('assets/js/**/*.js', ['build-js']);
        gulp.watch('assets/templates/**/*.html', ['build-templates']);
        gulp.watch('assets/sass/**/*.scss', ['build-compass']);
    });
};