const { createStore } = require("redux");

const initialState = {
  blogPosts: [],
  name: "irfanf "
}

const reducer = (state = initialState, action) => {
  return state
}

const store = createStore(reducer)

export default store