const router = require('koa-router')()
const { getDetailById } = require('@/utils')
let classes = require('@/data/classes')

router.prefix('/classes-')

router.get('list', function (ctx, next) {
  ctx.body = classes
})

router.get('add', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('detail-:id', function (ctx, next) {
  const id = +ctx.params.id
  ctx.body = getDetailById(classes, id)
})

router.get('update/:id', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('delete/:id', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
