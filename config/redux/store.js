const { createStore } = require("redux");

const initialState = {
  blogPosts: [],
  name: "irfanf "
}

const reducer = (state = initialState, action) => {
  if(action.type === 'UPDATE_DATA_BLOG'){
    return{
      ...state,
      blogPosts: action.payload
    }
  }
  if(action.type === 'UPDATE_NAME'){
    return{
      ...state,
      name: 'Ronaldo'
    }
  }
  return state
}

const store = createStore(reducer)

export default store