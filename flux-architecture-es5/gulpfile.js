var gulp = require('gulp');
var connect = require('gulp-connect');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('watch', ['run'], function() {
    gulp.watch(['./src/**/*'], ['build']);
});

gulp.task('build', function() {
    return gulp.src('./src/js/main.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});

gulp.task('run', ['build'], function() {
    connect.server({
        root: './build',
        port: 3333,
        livereload: true
    });
});

gulp.task('default', ['watch']);
