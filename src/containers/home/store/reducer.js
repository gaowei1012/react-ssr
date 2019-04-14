import { CHANGE_HOME } from './constants'

const defaultState = {
  name: 'dell',
  newList: []
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_HOME:
      return {
        ...state,
        newList: action.list
      }
    default:
      return state
  }
}
