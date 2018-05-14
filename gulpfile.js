const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
const vsftp = require('gulp-vsftp');
const zip = require('gulp-zip');
const moment = require('moment-kirk');
const webpackFile = require("./config/webpack/webpack.file.conf");
const packageInfo = require("./package.json");

/* 生成构建时间 存放在 生产目录里*/
gulp.task('buildTime', () =>
    fs.writeFile(path.resolve(webpackFile.proDirectory) + "/buildTime.txt", moment(new Date()).format('YYYY-MM-DD HH:mm:ss') +' '+ packageInfo.version , function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!",path.resolve());
    })
);
/* 打包生产目录 */
gulp.task('zip', () =>
    gulp.src(path.resolve(webpackFile.proDirectory + '/**'))
        .pipe(zip('app-[' + packageInfo.version +']-['+ moment(new Date()).format('YYYY-MM-DD HH-mm-ss')+'].zip'))
        .pipe(gulp.dest('backup'))
);
/* 测试环境  */
gulp.task('test', function () {
    return gulp.src(webpackFile.proDirectory+'/**')
        .pipe(vsftp({
            host: '182.92.229.222',
            user: 'root',
            pass: 'teyuntong_test@qaz123',
            cleanFiles: true,
            remotePath: '/mnt/www/teyuntong/app/tryGulpFtp',
        }));
});
/* 预生成环境 */
gulp.task('release', function () {
    return gulp.src(webpackFile.proDirectory+'/**')
        .pipe(vsftp({
            host: '',
            user: '',
            pass: '',
            cleanFiles: true,
            remotePath: '',
        }));
});
/*20环境 release*/
gulp.task('release-20', function () {
    return gulp.src(webpackFile.proDirectory+'/**')
        .pipe(vsftp({
            host: '',
            user: '',
            pass: '',
            cleanFiles: true,
            remotePath: '',
        }));
});
/*20环境 line*/
gulp.task('line-20', function () {
    return gulp.src(webpackFile.proDirectory+'/**')
        .pipe(vsftp({
            host: '',
            user: '',
            pass: '',
            cleanFiles: true,
            remotePath: '',
        }));
});
/*生产环境*/
gulp.task('product', function () {
    return gulp.src(webpackFile.proDirectory+'/**')
        .pipe(vsftp({
            host: '',
            user: '',
            pass: '',
            cleanFiles: true,
            remotePath: '',
        }));
});