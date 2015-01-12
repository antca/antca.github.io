var path = require('path');
var gulp = require('gulp');
var serve = require('gulp-serve');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var to5 = require('6to5-browserify');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglifyjs');
var buffer = require('vinyl-buffer');
var stylus = require('gulp-stylus');
var bootstrap = require('bootstrap-styl');
var nib = require('nib');

watchify.args.debug = true;

gulp.task('clientScripts', function() {
  var bundler = watchify(browserify(watchify.args))
  .require(__dirname + '/scripts/client/main.js', {
    entry: true
  })
  .transform(to5)
  .on('update', rebundle)
  .on('log', function(log) {
    console.log('[watchify] ' + log);
  });

  function rebundle() {
    return bundler.bundle()
    .on('error', function(error) {
      console.error(error.message);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public'))
    .pipe(livereload());
  }

  return rebundle();
});

gulp.task('prodClientScripts', function() {
  process.env["NODE_ENV"] = 'production';
  return browserify({
    entries: [__dirname + '/scripts/client/main.js'],
    debug: false
  })
  .transform(to5.configure({
    sourceMap: false
  }))
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./public'));
});

gulp.task('stylesheets', function(){
  gulp.watch('styles/**/*', function() {
    gulp.src('./styles/index.styl')
    .pipe(stylus({
      use: [nib(), bootstrap()]
    }))
    .pipe(gulp.dest('./public'))
    .pipe(livereload());
  });
});

gulp.task('serve', serve({
    root: [__dirname],
    port: 8080
}));

gulp.task('dev', ['clientScripts', 'stylesheets', 'serve']);

gulp.task('prod', ['prodClientScripts']);

gulp.task('default', ['dev']);
