// variables & plugins
var gulp = require('gulp'),
    bowerDir = 'vendor/bower_components/',
    assetFolder = 'resources/assets/',
    plugins = require('gulp-load-plugins')();

// less to css public
gulp.task('styles', function () {
    gulp.src(assetFolder + 'less/app.less')
        .pipe(plugins.less())
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('public/assets/css'))
});

// jquery to js public
gulp.task('scripts', function () {
    gulp.src(assetFolder + 'js/jq.js')
        .pipe(gulp.dest('public/assets/js'))
});

// angular to js public
gulp.task('angular', function () {
    gulp.src(assetFolder + 'ng/**/*.js')
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest('public/assets/js'))
});

// lib to css public
gulp.task('libStyles', function () {
    gulp.src([
        bowerDir + 'bootstrap/dist/css/bootstrap.min.css',
        bowerDir + 'magnific-popup/dist/magnific-popup.css',
        bowerDir + 'angular-loading-bar/build/loading-bar.min.css',
        bowerDir + 'angular-toastr/dist/angular-toastr.min.css'
    ])
        .pipe(plugins.concat('lib.css'))
        .pipe(gulp.dest('public/assets/css'));
});

// lib to js public
gulp.task('libScripts', function () {
    gulp.src([
        bowerDir + 'angular/angular.min.js',
        bowerDir + 'angular-loading-bar/build/loading-bar.min.js',
        bowerDir + 'angular-toastr/dist/angular-toastr.tpls.min.js',
        bowerDir + 'jquery/dist/jquery.min.js',
        bowerDir + 'bootstrap/dist/js/bootstrap.min.js',
        bowerDir + 'magnific-popup/dist/jquery.magnific-popup.min.js'
    ])
        .pipe(plugins.concat('lib.js'))
        .pipe(gulp.dest('public/assets/js'));
});

// font awesome
gulp.task('fontawesome', function () {
    gulp.src(bowerDir + 'fontawesome/css/**.*')
        .pipe(gulp.dest('public/assets/font-awesome/css'));
    gulp.src(bowerDir + 'fontawesome/fonts/**.*')
        .pipe(gulp.dest('public/assets/font-awesome/fonts'));
});

// default task
gulp.task('default', function () {
    gulp.start('styles', 'scripts', 'libScripts', 'libStyles', 'fontawesome', 'angular');
});

// watcher
gulp.task('watch', function () {
    gulp.watch(assetFolder + 'less/**/*.less', ['styles']);
    gulp.watch(assetFolder + 'js/jq.js', ['scripts']);
    gulp.watch(assetFolder + 'ng/**/*.js', ['angular']);
});