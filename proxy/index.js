const debug = require('@/utils').debug('proxy');
const proxy = require('koa-better-http-proxy')

module.exports = (app, target) => {
  if (!target) return
  // 代理
  console.log(`代理目标 => ${target}`)
  app.use(proxy(target, {
    proxyReqPathResolver: function (ctx) {
      const to = new URL(target + ctx.url)
      console.log('  ==>', to.href)
      return to.pathname
    }
  }))
}
