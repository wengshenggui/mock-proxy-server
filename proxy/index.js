const debug = require('@/utils').debug('proxy');
const proxy = require('koa-proxies')

module.exports = (app, target) => {
  if (!target) return
  // 代理
  debug(`=> ${target}`)
  console.log(`代理目标 => ${target}`)
  app.use(proxy('*', {
    target,
    changeOrigin: true,
    logs: (ctx, target) => {
      console.log('proxy: %s %s proxy => %s%s', ctx.req.method, ctx.req.oldPath, target, ctx.req.url)
    }
  }))
}
