const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
const port = 3001

const app = new Koa()
const router = new Router()

// 对跨域做出设置
app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/api/newList') return '*'
    return 'http://localhost:3000/'
  },
  exposeHeaders: ['WWWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  allowMethods: ['GET', 'POST', 'PUT']
}))


app.use(router.routes())
app.use(router.allowedMethods())


router.get('/api/newList', async (ctx) => {
  ctx.body = {
    data: [
      {"id": 1, "title": "this is home pages"},
      {"id": 2, "title": "今天天气很好呀!"},
      {"id": 3, "title": "你好啊，很高兴为您服务!"},
      {"id": 4, "title": "今天又是一天"}
    ]
  }
})

app.listen(port, () => {
  console.log(`server started port:${port}`)
})