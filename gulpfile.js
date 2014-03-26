
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

    
var paths = {
    scripts: [
        'app/js/transition.js',
        'app/js/alert.js',
        'app/js/button.js',
        'app/js/carousel.js',
        'app/js/collapse.js',
        'app/js/dropdown.js',
        'app/js/modal.js',
        'app/js/tooltip.js',
        'app/js/popover.js',
        'app/js/scrollspy.js',
        'app/js/tab.js',
        'app/js/affix.js'
    ],
    images: 'app/images/*'
};


// Lint, Concatinate and minify js files    
gulp.task('js', function () {
    return gulp.src(paths.scripts) 
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./gulpdist/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('./gulpdist/js'));
});


// minify images
gulp.task('images', function () {
 return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('./gulpdist/images'));
});


// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
});


gulp.task('default', ['js', 'images', 'watch']);
