const initialState = {
  name: "irfanf "
}

const globalReducer = (state = initialState, action) => {
  if(action.type === 'UPDATE_NAME'){
    return{
      ...state,
      name: 'Ronaldo'
    }
  }
  return state
}

export default globalReducer 