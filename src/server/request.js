import axios from 'axios'

const instanceServer = axios.create({
  baseURL: 'http://localhost:3001'
})

export default instanceServer