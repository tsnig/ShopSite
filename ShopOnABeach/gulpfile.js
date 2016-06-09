/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
     clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    imagemin = require('gulp-imagemin'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    rename = require('gulp-rename');

var paths = {};

paths.build = './content';
paths.app = './js/app.config.js';
paths.css = './css/*.css';
paths.scripts = './js/**/*.js';
paths.views = './views/*.html';

gulp.task('clean', function () {
    return gulp.src([paths.build + '*.js', paths.build + '*.css'])
        .pipe(clean());
});

gulp.task('files:js', function () {
    return browserify(paths.app)
		.bundle()
        .pipe(source('bundle.js'))
		.pipe(gulp.dest(paths.build));
});

gulp.task('files:css', function () {
    return gulp.src(paths.css)
        .pipe(rename('bundle.css'))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['files:js']);
    gulp.watch(paths.css, ['files:css']);
});

gulp.task('files', ['files:js', 'files:css', ]);

gulp.task('build', ['clean', 'files']);

gulp.task('default', ['build']);