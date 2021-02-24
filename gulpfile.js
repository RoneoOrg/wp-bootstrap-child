// Source: https://wpbeaches.com/getting-browsersync-running-with-gulp-4-and-valet/

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sitename = 'localhost'; // set your siteName here


function watch() {
	browserSync.init({

		// proxy: sitename +'.test',
		// or if site is http comment out below block and uncomment line above
		proxy: sitename + '/wp',
		host: sitename,
		open: 'external',
	});

	// Watched files paths
	gulp.watch('./*.php').on('change', browserSync.reload);
	gulp.watch('./js/*.js').on('change', browserSync.reload);
	gulp.watch('./css/*.css').on('change', browserSync.reload);
	gulp.watch('./*css').on('change', browserSync.reload);
}

exports.default = watch;
