import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../containers/home/store'

// 创建 reducer
const reducer = combineReducers({
  home: homeReducer
})

// 导出一个createStore方法，保证每个用户的store是唯一的
export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk, logger))
}

// get client store 
export const getClientStore = () => {
  const defaultState = window.context.state
  return createStore(reducer, defaultState, applyMiddleware(thunk, logger))
}
