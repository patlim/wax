import * as actions from '../actions/user'

const userReducer = (state = null, action) => {
  switch (actions.type){
    case actions.LOGIN_USER:
      return action.user
    case actions.LOGOUT_USER:
      return null
    default:
      return state
  }
}

export default userReducer