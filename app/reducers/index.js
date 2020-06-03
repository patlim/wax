import { combineReducers } from 'redux'

import entries from './entry'
import categories from './category'

export default combineReducers({
  entries,
  categories,
})
