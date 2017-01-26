var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('./src/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/assets/css'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./src/assets/sass/**/*.scss',['styles']);
});
