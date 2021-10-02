const initialStateDetail = {
  detailPost: {}
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