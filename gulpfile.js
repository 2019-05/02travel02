var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function() {
  console.log("Yip");
});

gulp.task('html', function() {
  console.log("Done to HTML here.")
});

gulp.task('styles', function() {
  console.log("Done to CSS here.")
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
