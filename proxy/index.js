const debug = require('@/utils').debug('proxy');
const proxy = require('./proxy')()

async function execProxy (ctx, target, otherOption = {}) {
  try {
    ctx.req.body = ctx.request.body
    await proxy.web(ctx.req, ctx.res, { target: target, ...otherOption })
  } catch (e) {
    throw e
  }
  return ctx.res.proxyBody || null
}

module.exports = (target, deal) => {
  if (!target) {
    return (ctx, next) => next()
  }
  // 存在则做代理
  debug(`=> ${target}`)
  console.log(`代理目标 => ${target}`)
  return (ctx, next) => next().then(async () => {
    if (ctx.status !== 404) {
      return
    }
    // 仅404做代理
    try {
      await execProxy(ctx, target)
      console.log(`代理成功：${ctx.path} => ${target + ctx.path}`);
    } catch (e) {
      console.error('代理失败：', e);
    }
  })
}
