import * as actions from '../actions/entry'

const initialState = [
  {
    id: 1,
    name: "Paper Trails",
    artist: "Darkside",
    img:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Darkside_Psychic_Cover.jpg/220px-Darkside_Psychic_Cover.jpg",
    source: "Youtube",
    date: "25/04/20",
    categories: ["#electronic","#downtempo","#rock"],
    link: "/"
  },
  {
    id: 2,
    name: "Dancer",
    artist: "Local Artist",
    img:
      "https://media.pitchfork.com/photos/5b8ff8112139ed4e0509acdd/1:1/w_500/Local%20Artist%20_%20Mood%20Hut%20_%20Dancer%20cover.jpg",
    source: "Soundcloud",
    date: "24/04/20",
    categories: ["#house"],
    link: "/"
  },
  {
    id: 3,
    name: "Teuf De Ouf",
    artist: "Scruscru & Jehan",
    img:
      "https://cdn.shopify.com/s/files/1/0306/7317/4665/products/li1_5b42afa0-260c-4fd1-8099-c7148a2e64ee_300x300.jpg?v=1581424806",
    source: "Bandcamp",
    date: "24/04/20",
    categories: ["#house","#disco"],
    link: "/"
  },
  {
    id: 4,
    name: "Luv",
    artist: "Lion Dixon",
    img:
      "https://d1dfuenbwfmzfl.cloudfront.net/assetts/images/mp3/2743-1586408912.jpg",
    source: "Spotify",
    date: "22/04/20",
    categories: ["#hiphop"],
    link: "/"
  },
  {
    id: 5,
    name: "Kyiv",
    artist: "Tom Misch, Yussef Dayes",
    img:
      "https://images.roughtrade.com/product/images/files/000/188/820/original/Tom-Misch-Gen.jpg?1587725002",
    source: "Youtube",
    date: "02/05/20",
    categories: ["#jazz", "#alternative", "#indie"],
    link: "/"
  },
  {
    id: 6,
    name: "CRUMPY",
    artist: "Nick Hakim",
    img: "https://media.pitchfork.com/photos/5ebbfc2b8b87698b3b0b9fc6/1:1/w_320/WILL%20THIS%20MAKE%20ME%20GOOD_Nick%20Hakim.jpg",
    source: "Youtube",
    date: "17/05/20",
    categories: ['#rnb', '#rock']
  },
  {
    id: 7,
    name: "Bag Lady",
    artist: "Mama's Gun",
    img: "https://img.discogs.com/XMfQWFJYhLVKG0Y0OPuqgVKesII=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-589418-1221533706.jpeg.jpg",
    source: "Spotify",
    date: "21/05/20",
    categories: ['#rnb', '#soul']
  }
]

const entryReducer = (state = initialState, action) => {
  switch (action.type){
    case actions.REC_ENTRIES:
      return [...state]
    case actions.ADD_ENTRY:
      state.push({ id: state.length + 1, ...action.entry })
      const newstate = state
      return newstate
    case actions.ADD_ENTRY_CATEGORY:
      return state.map(entry => {
        return entry.id === action.entryId
          ? {...entry, categories: [...entry.categories, action.category]}
          : entry
      })
    default:
      return state
  }
}

export default entryReducer
