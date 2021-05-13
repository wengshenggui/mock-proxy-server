const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors');
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')

const debug = require('@/utils').debug('app');
const config = require('@/config')
debug('config:', config)
const proxy = require('@/proxy')
const router = require('@/routes')

// error handler
onerror(app)

// middleware
app.use(cors())
app.use(bodyParser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')('public'))

app.use(views('views', {
  extension: 'pug'
}))

// routes
app.use(router.routes())

// proxy
proxy(app, config.proxy)

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
