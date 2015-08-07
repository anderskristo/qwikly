'use strict';

var gulp    = require('gulp'),
    fs      = require('fs'),
    _       = require('lodash'),

    builds  = JSON.parse(fs.readFileSync(__base + 'configs/builds.json')),
    paths   = JSON.parse(fs.readFileSync(__base + 'configs/paths.json'));


module.exports = function(val) {
    // Default to 'web-desktop' build
    var build = _.contains(['web'], val) ? val : 'web',
        list = [];

    _.each(builds[build], function (path) {
        list.push(paths[path]);
    });

    return [].concat.apply([], list);
};