/**
 * 项目配置
 */
module.exports = config = {
  // 项目名称，跟debug标志相关
  name: 'mocker', // mocker
  // 代理目标，404的请求转发到代理
  proxy: 'http://localhost:3300/school'
}
