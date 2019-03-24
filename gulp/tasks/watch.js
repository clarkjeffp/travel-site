var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSynch = require('browser-sync').create();

gulp.task('watch', function() {
    notify: false,
    browserSynch.init({
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function() {
        browserSynch.reload();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });

});

// styles is ran to create the css file before ccInject is run by wrapping in []
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSynch.stream());
});