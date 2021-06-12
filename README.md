# mock-proxy-server
```shell
# install dependencies:
  $ cd mock-proxy-server && yarn

# run the app:
  $ yarn start

# dev the app:
  $ yarn run dev

# debug the app:
  $ yarn run debug
```

## 目录结构：

```
.
├─bin ------ 启动脚本
├─config --- 配置项
├─data ----- 数据
├─proxy ---- 代理
├─public --- 页面资源
├─routes --- 路由，mock接口定义
├─utils ---- 工具
└─views ---- 页面
```

## 说明：

项目用于前端开发。

用于对接口做mock，如果没有mock的接口则自动代理转发到服务器

## 作用：

根据后端提供的接口定义进行mock，前端就可以进入开发，不需要等待后端接口开发完成。等后端接口开发完成后，再切换后端接口联调即可，也可以部分切换。

## 适用于：

适用于依赖接口开发的场景。

如，在现有项目上，新增功能需要依赖接口的场景。当然也包括新项目。

## 项目包含两个功能：

1. 对接口做mock
2. 代理请求到服务器

## 优点：

工具独立于项目，不需要侵入项目

集成[mock.js](http://mockjs.com/)

可以直接代理现有接口到服务器

## 项目依赖：

项目运行于nodejs环境，基于[koa](https://github.com/koajs/koa)，[koa-router](https://github.com/ZijianHe/koa-router)，[koa-better-http-proxy](https://github.com/nsimmons/koa-better-http-proxy)，[Mock ](https://github.com/nuysoft/Mock) 开发。

