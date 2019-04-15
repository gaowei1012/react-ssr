import { CHANGE_HOME } from './constants'

const changeList = (list) => ({
  type: CHANGE_HOME,
  list: list
})

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/newList')
      .then((res) => {
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}