var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    sass        = require('gulp-sass'),
    prefix      = require('autoprefixer-core'),
    sourcemaps  = require('gulp-sourcemaps'),
    reload      = browserSync.reload;
  
gulp.task('browser-sync', function() {
    return browserSync({
        files: "../css/*.css",
        server: "../"
        //proxy: "garbini.singularu.com:8888",
        //startPath: "/",
        //reloadDelay: 1000
    });
});

gulp.task('styles', function() {
    return gulp.src('sass/main.scss')
        .pipe(sourcemaps.init())
            .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('../css'))
        //.pipe(reload({stream:true}));
});

gulp.task('prod', function() {
    return gulp.src('../css/main.css')
        .pipe(prefix('last 2 version'))
        .pipe(gulp.dest('../css'));
});

// Default task to be run with `gulp`
gulp.task('default', ['styles', 'browser-sync'], function () {
    gulp.watch("sass/*.scss", ['styles']);
});

