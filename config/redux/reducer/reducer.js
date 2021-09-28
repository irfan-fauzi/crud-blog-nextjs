const { combineReducers } = require("redux");
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";

const reducer = combineReducers({homeReducer, globalReducer})

export default reducer