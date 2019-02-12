let baseUrl
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = 'http://210.12.23.78:8082'
    break
  case 'test':
    baseUrl = 'test'
    break
  case 'production':
    baseUrl = '222222222' // 生产环境url
    break
}

export default baseUrl
