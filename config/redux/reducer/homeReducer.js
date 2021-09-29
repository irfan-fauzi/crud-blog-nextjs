const initialStateHome = {
  blogPosts: [],
  page: {
    current: 1,
    total: 1
  }
}


const homeReducer = (state = initialStateHome, action) => {
  if(action.type === 'UPDATE_DATA_BLOG'){
    return{
      ...state,
      blogPosts: action.payload
    }
  }
  if(action.type === 'UPDATE_PAGE'){
    return{
      ...state,
      page: action.payload
    }
  }
  return state
}

export default homeReducer