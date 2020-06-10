import { combineReducers } from 'redux'

import feed from './feed'
import user from './user'

export default combineReducers({
  feed,
  user
})
