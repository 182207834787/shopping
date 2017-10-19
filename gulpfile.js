/**
 * Created by Administrator on 2017/10/18.
 */
var fs = require("fs");
var url = require("url");
var path = require("path");

var gulp = require("gulp");
var webserver = require("gulp-webserver");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

gulp.task("productServer", function () {
    gulp.src("./")
        .pipe(webserver({
            host: "localhost",
            port: 8000,
            livereload: true,
            directoryListing: {
                path: "./",
                enable: true
            },
            open: true,
            middleware: function (req, res, next) {
                var urlObj = url.parse(req.url);

                var mockUrl = path.join(__dirname, "Data/", urlObj.query + ".json");
                fs.exists(mockUrl, function (exist) {
                    if (!exist) {
                        var result = {
                            isSucces: true,
                            data: null,
                            errCode: 0,
                            errMsg: "Can not find this File:" + mockUrl
                        };
                        res.writeHead(404, {
                            "Content-Type": "text/json;charset=utf8"
                        });
                        res.end(JSON.stringify(result));
                    } else {
                        fs.readFile(mockUrl, function (err, data) {
                            if (err) return console.error(err);
                            var result = {
                                isSucces: true,
                                data: data.toString(),
                                errCode: 0,
                                errMsg: ""
                            };
                            res.writeHead(200, {
                                "Content-Type": "text/json;charset=utf8",
                                "Access-Control-Allow-Origin": "http://localhost:63342"
                            });
                            res.end(JSON.stringify(result));
                        });
                    }
                });
            }
        }));
});

/*
gulp.task("minifyCtl", function () {
    gulp.src("./App/Controllers/!*.js")
        .pipe(concat("controller.js"))
        .pipe(rename({suffix: ".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("./App"))
});
gulp.task("minifySrv", function () {
    gulp.src(["./App/Services/baseServer.js", "./App/Services/searchServer.js"])
        .pipe(concat("services.js"))
        .pipe(rename({suffix: ".min"}))
        .pipe(uglify())
        .pipe(gulp.dest("./App"))
});*/
