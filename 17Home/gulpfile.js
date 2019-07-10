var gulp = require("gulp");
var sass = require("gulp-sass");

var cssFiles = [
    "./src/style/main.scss"

]

function styles() {
    return (
        gulp
            .src = cssFiles
            .pipe(sass.on('error'.sass.logError()))
            .pipe(gulp.dest("./build/style"))

    )
    gulp.task('compilateSCSS'.styles)
}