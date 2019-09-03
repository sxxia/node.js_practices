// 第一，引入内置模块
const path = require('path');

// 第二，引入文件模块(相对路径，绝对路径都可以)
// 文件的后缀可以不加，但推荐加上，这样更快
const math = require('../09-node_module_demo/add.js');

// 第三，引入文件夹模块
// 首先到根目录的package.json文件中去找main的配置节点
// 如果main的配置结点是index.js， 那么它就是去引入的文件夹中找这个index.js文件
// 如果你配置结点是app.js，那么它就会去找app.js文件
// 不推荐引用整个文件夹，会减慢速度
const m = require('./');

// 第四，引入第三方模块
// 先通过npm i安装相关模块。例如， string-width。npm i string-width
// 然后再用require引入
const string = require('string-width');