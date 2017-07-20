var gulp = require('gulp');
var karma = require('karma').server;
var bower = require('gulp-bower');

/**
 * Install dependencies for angular-1.6.x
 */
gulp.task('bower-1.6', function() {
    return bower({ directory: './bower_components', cwd: './test/angular-1.6' })
});

/**
 * Run tests for angular-1.6.x
 */
gulp.task('test-1.6', ['bower-1.6'], function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        noAutoWatch: true,
        reporters: 'dots',
        browsers: ['PhantomJS']
    }, done);
});