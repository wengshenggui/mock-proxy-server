const Mock = require('mockjs')

const base = "一二三四五六".split("")
const classes = base.map(item => {
  return base.map(i => {
    return `${item}年${i}班`
  })
}).flat().map((item, index) => {
  return {
    id: index,
    name: item
  }
})

module.exports = classes
