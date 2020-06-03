export const ADD_CATEGORY = "ADD_CATEGORY"
export const REQ_CATEGORIES = "REQ_CATEGORIES"
export const REC_CATEGORIES = "REC_CATEGORIES"
export const SELECT_CATEGORY = "SELECT_CATEGORY"

export const ADD_TAG = "ADD_TAG"

export const requestCategories = () => {
  return {
    type: REQ_CATEGORIES
  }
}

export const receiveCategories = () => {
  return {
    type: REC_CATEGORIES
  }
}

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    category
  }
}

export const selectCategory = selectedCategory => {
  return {
    type: SELECT_CATEGORY,
    selectedCategory
  }
}

export const getCategories = () => {
  return dispatch => {
    dispatch(requestCategories())
    dispatch(receiveCategories())
  }
}
