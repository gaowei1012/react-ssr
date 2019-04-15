import axios  from 'axios'

const instanceClient = axios.create({
  baseURL: '/'
})

export default instanceClient