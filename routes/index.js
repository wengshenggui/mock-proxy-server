const router = require('koa-router')()
const debug = require('@/utils').debug('routes');

router.use(require('./root').routes())
router.use(require('./school').routes())

debug(router.stack.map(item => item.path))

module.exports = router
