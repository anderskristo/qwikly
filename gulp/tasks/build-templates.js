'use strict';

var gulp = require('gulp'),
    _ = require('lodash'),
    colors = require('colors'),
    buildTemplates = require(__base + 'helpers/build-templates');

module.exports = function () {
    gulp.task('build-templates', function () {
        var module = __moduleName;
        var dir = 'assets/templates/';
        var tmpDir = 'assets/js/tmp';

        return buildTemplates(module, dir, tmpDir);
    });
};