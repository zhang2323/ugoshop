var gulp=require("gulp");
var sass=require("gulp-sass");



gulp.task("sassfile",function(){
	gulp.src("sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("css"))
});


gulp.task("watchall",function(){
	gulp.watch("sass/*.scss",["sassfile"]);
});