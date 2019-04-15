import express from 'express'
import { port } from '../../config/config.defult'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'
import { render } from './../utils/utils'
import { getStore } from '../store'
import routes from '../Routes'

const app = express()
app.use(express.static('public'))

// 转发
app.use('/api', proxy('http://localhost:3001', {
  proxyReqPathResolver: (req) => {
    // console.log(req.url)
    return '/api' + req.url
  }
}))

app.get('*', (req, res) => {

  const store = getStore()
  // 根据路由路径 往store添加数据
  // 处理多级路由时，使用react-router-config提供的matchRoutes方法
  const matchedRoutes = matchRoutes(routes, req.path)
  const promises = []

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
    res.send(render(store, routes, req))
  })
})

app.listen(port, () => {
  console.log(`server started port:${port}`)
})
