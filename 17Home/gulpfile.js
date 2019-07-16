var gulp = require("gulp");
var sass = require("gulp-sass");

var cssFiles = ["./src/style/main.scss"];

function styles() {
    return (
        gulp
            .src(cssFiles)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest("./build/style"))

    )
}
function watch(){
    gulp.watch('./src/style/**/*.scss', styles);

}

gulp.task("compilateSCSS",styles);
gulp.task("watch",watch);
