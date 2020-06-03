export const ADD_ENTRY = "ADD_ENTRY"
export const REQ_ENTRIES = "REQ_ENTRIES"
export const REC_ENTRIES = "REC_ENTRIES"
export const ADD_ENTRY_CATEGORY = "ADD_ENTRY_CATEGORY"


export const requestEntries = () => {
  return {
    type: REQ_ENTRIES
  }
}

export const receiveEntries = () => {
  return {
    type: REC_ENTRIES
  }
}

export const addCategoryToEntry = (category, entryId) => {
  return {
    type: ADD_ENTRY_CATEGORY,
    entryId,
    category: '#' + category
  }
}

const getDate = () => {
  const today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1
  let yy = '20'
  if (dd < 10) { 
      dd = '0' + dd; 
  } 
  if (mm < 10) { 
      mm = '0' + mm; 
  } 
  return dd + '/' + mm + '/' + yy;
}

export const addEntry = ({ link, category, artist, name }) => {
  return {
    type: ADD_ENTRY,
    entry: {
      name: name,
      artist: artist,
      img:
        "https://redi.eu/wp-content/uploads/2015/08/not-available-300x217.png",
      source: "work in progress",
      date: getDate(),
      categories: ['#'+ category],
      link: link
    }
  }
}

export function getEntries() {
  return dispatch => {
    dispatch(requestEntries())
    dispatch(receiveEntries())
  }
}
