import {combineReducers} from "redux"

import news from "./newsReducer"
import todos from "./todosReducer"

export default combineReducers({
   todos,
   news
})
