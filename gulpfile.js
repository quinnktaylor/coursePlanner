var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function() {
  return sass('app/css/scss/site.scss')
    .pipe(gulp.dest('app/css'))
    .pipe(autoprefixer())
    .pipe(reload({ stream:true }));
});

// watch files for changes and reload
gulp.task('boom', ['sass'], function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['*.html', 'scripts/**/*.js'], {cwd: 'app'}, reload);
  gulp.watch('app/css/scss/**/*.scss', ['sass']);
});
