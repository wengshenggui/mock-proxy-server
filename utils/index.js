const { name } = require('@/config')
const debug = require('debug');

module.exports.debug = (module) => debug(`${name}:${module}`)

module.exports.getDetailById = function (list, id) {
  return list.filter(item => item.id === id)
}
