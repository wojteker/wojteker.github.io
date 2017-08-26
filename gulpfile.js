var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // Here we tell gulp to watch for file changes and notify browser-sync
    gulp.watch('*.html').on('change', browserSync.reload);
	gulp.watch('style/*.css').on('change', browserSync.reload);
});