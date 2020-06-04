export const ADD_TO_FEED = "ADD_TO_FEED"
export const REQ_FEED = "REQ_FEED"
export const REC_FEED = "REC_FEED"


export const requestFeed = () => {
  return {
    type: REQ_FEED
  }
}

export const receiveFeed = () => {
  return {
    type: REC_FEED
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

export const addToFeed = ({ artist, albumName, image }) => {
  return {
    type: ADD_TO_FEED,
    feed: {
      artist,
      name: albumName,
      image,
      date: getDate()
    }
  }
}

export function getFeed() {
  return dispatch => {
    dispatch(requestFeed())
    dispatch(receiveFeed())
  }
}
