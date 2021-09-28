const initialStateHome = {
  blogPosts: []
}


const homeReducer = (state = initialStateHome, action) => {
  if(action.type === 'UPDATE_DATA_BLOG'){
    return{
      ...state,
      blogPosts: action.payload
    }
  }
  return state
}

export default homeReducer