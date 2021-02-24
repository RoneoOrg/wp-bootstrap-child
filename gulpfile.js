// Source: https://jasonyingling.me/modern-javascript-sass-gulp-wordpress-workflow/
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

function css() {
    return src('./assets/sass/*.scss', { sourcemaps: true })
        .pipe(sass())
        //.pipe(minifyCSS())
        .pipe(dest('./'), { sourcemaps: true })
        .pipe(browserSync.stream());
}

function js() {
    return src('./assets/js/*.js', { sourcemaps: true })
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('build.min.js'))
        .pipe(dest('./js/min', { sourcemaps: true }));
}

function browser() {
    browserSync.init({
        proxy: 'wp.local',
        files: [
            './**/*.php'
        ]
    });
    watch('./assets/sass/**/*.scss', css);
    watch('./assets/js/*.js', js).on('change', browserSync.reload);
}

exports.css = css;
exports.js = js;
exports.default = series(css,js,browser);