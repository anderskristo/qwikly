'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    concat      = require('gulp-concat'),
    sourceMaps  = require('gulp-sourcemaps'),
    uglify      = require('gulp-uglify'),
    getPaths    = require(__base + 'helpers/get-paths');

module.exports = function () {
    gulp.task('build-js', [], function () {
        return gulp.src(getPaths('web'))
//            .pipe(sourceMaps.init())
            .pipe(concat(__appName + '.js'))
//            .pipe(sourceMaps.write())
            .pipe(gulp.dest('www/js'))
            .pipe(reload({stream: true}));
    });


    gulp.task('build-js-min', [], function () {
        return gulp.src(getPaths('web'))
            .pipe(concat(__appName + '.js'))
            .pipe(uglify())
            .pipe(gulp.dest('www/js'))
            .pipe(reload({stream: true}));
    });
};