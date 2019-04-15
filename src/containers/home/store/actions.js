// actions
import axios from 'axios'
import { CHANGE_HOME } from './constants'

const changeList = (list) => ({
  type: CHANGE_HOME,
  list: list
})

export const getHomeList = (server) => {

  // 判断是否是服务端渲染
  let url = ''
  if (server) {
    url = 'http://localhost:3001/api/newList'
  } else {
    url = '/api/newList'
  }

  return (dispatch) => {
    return axios.get(url)
      .then((res) => {
        // console.log(res.data.data)
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}