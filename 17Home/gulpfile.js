var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var cssFiles = ["./src/style/main.scss"];
var jsFiles = ["./src/script/main.js"];
var image = require("gulp-image");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var cleanCSS= require("gulp-clean-css");


function styles() {
    return (
        gulp
            .src(cssFiles)
            .pipe(
                autoprefixer({
                    browsers: ['last 2 versions'],
                    cascade: false

                })
            )

            .pipe(sass().on('error', sass.logError))

            .pipe(
                cleanCSS({
                    level:2
                })
            )
            .pipe(gulp.dest("./build/style"))
            .pipe(browserSync.stream())

    )
}

function scripts() {
    return gulp
        .src(jsFiles)

        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream())
}

function images() {
    return gulp
        .src("./src/static/*")
        .pipe(image())
        .pipe(gulp.dest("./build/static"))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./src/static/*", images);
    gulp.watch('./src/style/**/*.scss', styles);
    gulp.watch("./src/script/**/*.js", scripts)

}

gulp.task("compilateSCSS", styles);
gulp.task("images", images);
gulp.task("watch", watch);
