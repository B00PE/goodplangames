var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('themes/custom/goodplangames/assets/sass/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('themes/custom/goodplangames/css/'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('themes/custom/goodplangames/assets/sass/style.scss', ['sass']);
});