'use strict';
 //引入gulp包依赖
var gulp = require('gulp');
//引入gulp-sass
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 //创建一个gulp任务 sass
gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')//让gulp去拿到原始文件
  //吧scss原始文件交给gulp-sass做编译转换为css文件
    .pipe(sass({outputStyle:'expanded'}).on('error', function(e){
        console.log('sass is error...',e)
    }))
    //输出css文件
    .pipe(gulp.dest('src/css'));
});
 //创建一个gulp监听任务 sass:watch
gulp.task('sass:watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
 
});
//gulp默认任务
gulp.task('default',['sass:watch'],function(){

});
