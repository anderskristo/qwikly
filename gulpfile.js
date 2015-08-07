global.__base = __dirname + '/gulp/';
global.__appName = 'qwikly';
global.__moduleName = 'qwikly';

var gulp = require('gulp');

require('./gulp/tasks/build-compass')();
require('./gulp/tasks/build-js')();
require('./gulp/tasks/build-templates')();
require('./gulp/tasks/copy-fonts')();
require('./gulp/tasks/copy-qwikly-config')();

require('./gulp/tasks/watch')();
require('./gulp/tasks/watch-sync')();

require('./gulp/tasks/deploy')();
