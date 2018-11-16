React 入门教程
---

React.js（React）是 Facebook 推出的一个用来构建用户界面的 JavaScript 库。

目录
===
- [React概念](#React概念)
    - [组件](#组件)
    - [JSX](#JSX)
    - [Virtual DOM](#VirtualDOM)
    - [Data Flow](#DataFlow)
- [React 特点](#React特点)
- [React环境搭建](#React环境搭建)


## React概念

React 大体包含下面这些概念：
- 组件
- JSX
- Virtual DOM
- Data Flow

### 组件
React 应用都是构建在组件之上。
上面的 `HelloMessage` 就是一个 React 构建的组件，最后一句 render 会把这个组件显示到页面上的某个元素 `mountNode` 里面，显示的内容就是 `<div>Hello John</div>`。
`props` 是组件包含的两个核心概念之一，另一个是 `state`（这个组件没用到）。可以把 `props` 看作是组件的配置属性，在组件内部是不变的，只是在调用这个组件的时候传入不同的属性（比如这里的 name）来定制显示这个组件。
### JSX
从上面的代码可以看到将 HTML 直接嵌入了 JS 代码里面，这个就是 React 提出的一种叫 `JSX` 的语法，这应该是最开始接触 React 最不能接受的设定之一，因为前端被“表现和逻辑层分离”这种思想“洗脑”太久了。但实际上组件的 HTML 是组成一个组件不可分割的一部分，能够将 HTML 封装起来才是组件的完全体，React 发明了 `JSX` 让 JS 支持嵌入 HTML 不得不说是一种非常聪明的做法，让前端实现真正意义上的组件化成为了可能。
好消息是你可以不一定使用这种语法，后面会进一步介绍 JSX，到时候你可能就会喜欢上了。现在要知道的是，要使用包含 JSX 的组件，是需要“编译”输出 JS 代码才能使用的，之后就会讲到开发环境。
### Virtual DOM
当组件状态 state 有更改的时候，React 会自动调用组件的 render 方法重新渲染整个组件的 UI。
当然如果真的这样大面积的操作 DOM，性能会是一个很大的问题，所以 React 实现了一个Virtual DOM，组件 DOM 结构就是映射到这个 Virtual DOM 上，React 在这个 Virtual DOM 上实现了一个 diff 算法，当要重新渲染组件的时候，会通过 diff 寻找到要变更的 DOM 节点，再把这个修改更新到浏览器实际的 DOM 节点上，所以实际上不是真的渲染整个 DOM 树。这个 Virtual DOM 是一个纯粹的 JS 数据结构，所以性能会比原生 DOM 快很多。
### Data Flow
“单向数据绑定”是 React 推崇的一种应用架构的方式。当应用足够复杂时才能体会到它的好处，虽然在一般应用场景下你可能不会意识到它的存在，也不会影响你开始使用 React，你只要先知道有这么个概念。

## React特点

- 1. 声明式设计 −React采用声明范式，可以轻松描述应用。

- 2. 高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。

- 3. 灵活 −React可以与已知的库或框架很好地配合。

- 4. JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。

- 5. 组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。

- 6. 单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

## React环境搭建

- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 是React环境中必不可少的部分,如果你没安装，[可以点击](http://nodejs.cn/download/)

- NPM Node.js的包管理器 npm，是全球最大的开源库生态系统。[安装](http://npm.taobao.org/
)
- 假如你们这两个环境已经配置好，那么快和我一起开始React之旅吧

```bash
# 进入项目主目录
cd dir
# 创建项目配置文件
npm init!
# 配置Bebel  
npm install --save-dev babel-preset-react
npm install --save-dev babel-core
npm install --save-dev babel-loader
npm install --save-dev babel-preset-es2015
#  安装React、React-dom
npm install --save-dev react react-dom

# 安装webpack，并进行配置
npm install --save-dev webpack

# 安装webpack-dev-server node服务器,本地调试使用
npm install --save-dev webpack-dev-server
```
webpack.config.js

```js
var webpack = require('webpack');
var path = require('path');
// var HtmlwebpackPlugin = require('html-webpack-plugin');//html模块
var FastUglifyJsPlugin = require('fast-uglifyjs-plugin');//资源包压缩

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var INDEX = path.resolve(ROOT_PATH, 'src/demo.js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
module.exports = {
    devtool: 'eval-source-map',
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        index: INDEX
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].min.js'
    },

    resolve: {
        extensions: [ '.jsx', '.js', '.json'],

    },
    plugins: [
        new FastUglifyJsPlugin({
            compress: {
                warnings: false,
            }

        }),
        new webpack.optimize.UglifyJsPlugin()

    ],

    module: {//在配置文件里添加JSON loader
        loaders: [
            {test: /\.json$/, loader: "json-loader"},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg|gif)$/, loader: "file-loader?name=images/[hash:8].[name].[ext]"},//图片打包配置
            {
                test: /\.js$/,
                loader: "babel-loader"
            }


        ]
    },
    devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        // colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },

};

```