const { combineReducers } = require("redux");
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
import createBlogReducer from "./createNewBlog";
const reducer = combineReducers({homeReducer, globalReducer, createBlogReducer})

export default reducer