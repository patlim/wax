import * as actions from "../actions/category"

const initialState = {
  selectedCategory: '#all',
  taglist: [
  { id: 0, tag: "#all" },
  { id: 1, tag: "#electronic" },
  { id: 2, tag: "#downtempo" },
  { id: 3, tag: "#rock" },
  { id: 4, tag: "#house" },
  { id: 5, tag: "#disco" },
  { id: 6, tag: "#hiphop" },
  { id: 7, tag: "#jazz" },
  { id: 8, tag: "#alternative" },
  { id: 9, tag: "#indie" },
  { id: 10, tag: "#soul" }
]}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.REC_CATEGORIES:
      return {...state}
    case actions.ADD_CATEGORY: // this should only be if the category isn't in the list
      return {...state, taglist: [...state.taglist, { id: state.length(), category: action.category }]}
    case actions.SELECT_CATEGORY:
      return {...state, selectedCategory: action.selectedCategory}
    default:
      return state
  }
}

export default categoryReducer
