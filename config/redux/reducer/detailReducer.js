const initialStateDetail = {
  detailPost: {
    image: '',
    author: {
      uid: '',
      name: ''
    },
    title: '',
    bodyBlog: ''
  }
}

const detailReducer = (state = initialStateDetail, action) => {
  if(action.type === 'DETAIL_DATA_BLOG'){
    return {
      ...state,
      detailPost : action.payload 
    }
  }
  return state
}

export default detailReducer