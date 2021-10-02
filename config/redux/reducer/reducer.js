const { combineReducers } = require("redux");
import globalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
import createBlogReducer from "./createNewBlog";
import detailReducer from "./detailReducer";
const reducer = combineReducers({homeReducer, globalReducer, createBlogReducer, detailReducer})

export default reducer