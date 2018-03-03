const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('index.html', ['build']).on('change', reload);
  gulp.watch('style.css', ['prefix']);
})

gulp.task('prefix', () => {
  return gulp.src('./style.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream: true}));
})

gulp.task('build', () => {
  gulp.src('./index.html')
    .pipe(gulp.dest('dist'))

  gulp.src('images/*')
    .pipe(gulp.dest('dist/images'))
})