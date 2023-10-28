let gulp = require("gulp");
let concat = require("gulp-concat");

gulp.task("makeOneJs", function() {
    return gulp.src(["scripts/deck.js", "scripts/game.js","scripts/helpers.js", "scripts/main_b.js"])
    .pipe(concat("main.js"))
    .pipe(gulp.dest("."))
})

gulp.task("watchJs", function(){
    gulp.watch("scripts/*.js", gulp.series("makeOneJs"));
})