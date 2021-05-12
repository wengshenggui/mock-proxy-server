const Mock = require('mockjs')

module.exports = Mock.mock({
  'data|50': [{
    'id|+1': 1,
    'guid': '@guid',
    'name': '@cname',
    'age': '@integer(20, 50)',
    'birthday': '@date("MM-dd")',
    'address': '@county(true)',
    'email': '@email',
  }]
}).data
