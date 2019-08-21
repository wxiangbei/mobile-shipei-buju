1.初始化npm配置文件
```shell
#到项目的根目录执行如下命令
$npm init -y
```
命令执行完成后会在 会在根目录生成package.json文件，此文件为npm的配置文件。
2.安装依赖的gump插件
```shell
#先全局安装gulp依赖
$npm i gulp -g
#安装gulp依赖
$npm i -D gulp
```
3.安装gulp-sass依赖
```shell
#安装gulp-sass
$npm i gulp-sass -D
#安装gulp-sass，依赖了node-sass，此包比较大，从github网下载，可能会失败。
#怎么办么？使用淘宝镜像或者设置npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
```
4.全局安装live-server帮我们启动web服务
```shell
#全局安装live-server
$ npm i -g live-server
#进入项目目录(src)
#启动web服务(live-server)
````
5.chrome浏览器远程真机调试
首选保证以下几点：
+ 手机必须打开usb调试功能（android）
+ 手机必须安装android的chromme浏览器app
+ 手机要通过usb链接到电脑

用chrome远程调试