const router = require('koa-router')()

router.prefix('/students-')

router.get('list', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('add', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('detail-:id', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('update/:id', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('delete/:id', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
