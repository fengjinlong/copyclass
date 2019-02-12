let baseUrl
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://10.1.1.16:9001'
    break
  case 'test':
    baseUrl = 'http://10.1.1.16:9001'
    break
  case 'production':
    baseUrl = 'production' // 生产环境url
    break
}

export default baseUrl
