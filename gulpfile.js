var gulp = require('gulp');
var ts = require('gulp-typescript');

// Grab settings from tsconfig.json
var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function () {
  console.log(' ----------- build scripts -----------')
  var tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('built'));
});

// Build
gulp.task('build', ['scripts']);


gulp.task('watch', ['build'], function () {
  gulp.watch('src/**/*.ts', ['build']);
  gulp.watch('src/**/*.tsx', ['build']);
  gulp.watch('src/native-base-theme/**/*.js', ['build']);
});

gulp.task('default', ['build']);