const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }))
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['styles']);
});

gulp.task('default', ['watch']);