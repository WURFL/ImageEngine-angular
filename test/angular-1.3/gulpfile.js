var gulp = require('gulp');
var karma = require('karma').server;
var bower = require('gulp-bower');

/**
 * Install dependencies for angular-1.2.x
 */
gulp.task('bower-1.3', function() {
    return bower({ directory: './bower_components', cwd: './test/angular-1.3' })
});

/**
 * Run tests for angular-1.2.x
 */
gulp.task('test-1.3', ['bower-1.3'], function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        noAutoWatch: true,
        reporters: 'dots',
        browsers: ['PhantomJS']
    }, done);
});