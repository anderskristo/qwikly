'use strict';

var gulp            = exports.gulp = require('gulp'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    _               = require('lodash'),
    templateCache   = require('gulp-angular-templatecache');

module.exports = function (module, dir, tmpDir) {
    if (_.endsWith(dir, '/')) {
        dir = dir.slice(0, - 1)
    }

    return gulp.src(dir + '/**/*.html')
        .pipe(templateCache({module: module}))
        .pipe(gulp.dest(tmpDir))
        .pipe(reload({stream: true}));
};