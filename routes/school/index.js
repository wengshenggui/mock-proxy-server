const router = require('koa-router')()

router.prefix('/school')

router.use(require('./classes').routes())
router.use(require('./students').routes())

module.exports = router
