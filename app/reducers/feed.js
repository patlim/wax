import * as actions from '../actions/feed'

const initialState = [
  {
    id: 1,
    name: "Paper Trails",
    artist: "Darkside",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Darkside_Psychic_Cover.jpg/220px-Darkside_Psychic_Cover.jpg",
    date: "25/04/20"
  },
  {
    id: 2,
    name: "Dancer",
    artist: "Local Artist",
    image:
      "https://media.pitchfork.com/photos/5b8ff8112139ed4e0509acdd/1:1/w_500/Local%20Artist%20_%20Mood%20Hut%20_%20Dancer%20cover.jpg",
    date: "24/04/20"
  },
  {
    id: 3,
    name: "Teuf De Ouf",
    artist: "Scruscru & Jehan",
    image:
      "https://cdn.shopify.com/s/files/1/0306/7317/4665/products/li1_5b42afa0-260c-4fd1-8099-c7148a2e64ee_300x300.jpg?v=1581424806",
    date: "24/04/20"
  },
  {
    id: 4,
    name: "Luv",
    artist: "Lion Dixon",
    image:
      "https://d1dfuenbwfmzfl.cloudfront.net/assetts/images/mp3/2743-1586408912.jpg",
    date: "22/04/20"
  },
  {
    id: 5,
    name: "Kyiv",
    artist: "Tom Misch, Yussef Dayes",
    image:
      "https://images.roughtrade.com/product/images/files/000/188/820/original/Tom-Misch-Gen.jpg?1587725002",
    date: "02/05/20"
  },
  {
    id: 6,
    name: "CRUMPY",
    artist: "Nick Hakim",
    image: "https://media.pitchfork.com/photos/5ebbfc2b8b87698b3b0b9fc6/1:1/w_320/WILL%20THIS%20MAKE%20ME%20GOOD_Nick%20Hakim.jpg",
    date: "17/05/20"
  },
  {
    id: 7,
    name: "Bag Lady",
    artist: "Mama's Gun",
    image: "https://img.discogs.com/XMfQWFJYhLVKG0Y0OPuqgVKesII=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-589418-1221533706.jpeg.jpg",
    date: "21/05/20"
  }
]

const feedReducer = (state = initialState, action) => {
  switch (action.type){
    case actions.REC_FEED:
      return [...state]
    case actions.ADD_TO_FEED:
      state.push({ id: state.length + 1, ...action.feed })
      const newstate = state.sort((a, b) => {
        a = a.date.split('/').reverse().join('');
        b = b.date.split('/').reverse().join('');
        return a < b ? 1 : a > b ? -1 : 0;
      })
      return newstate
    default:
      return state
  }
}

export default feedReducer
