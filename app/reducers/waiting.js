import * as actions from '../actions/index'

const waitingReducer = (state = false, action) => {
  switch (actions.type){
    case actions.REQ_CATEGORY:
      return true
    case actions.REC_CATEGORY:
      return false
    default:
      return state
  }
}

export default waitingReducer