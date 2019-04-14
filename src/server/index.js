import express from 'express'
import { port } from '../../config/config.defult'
import { render } from './../utils/utils'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.end(render(req))
})

app.listen(port, () => {
  console.log(`server started port:${port}`)
})
