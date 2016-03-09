var gulp = require('gulp');
var karma = require('karma').Server;
var bower = require('gulp-bower');

require('./test/angular-1.2/gulpfile');
require('./test/angular-1.3/gulpfile');
require('./test/angular-1.4/gulpfile');
require('./test/angular-1.5/gulpfile');

/**
 * Run tests for all angular versions
 */
gulp.task('test-all-versions', ['test-1.2', 'test-1.3', 'test-1.4', 'test-1.5'], function (done) {
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, done);
});

gulp.task('default', ['tdd']);
