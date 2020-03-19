import UserReducer from './user/reducer'
import ArticleReducer from './article/reducer'
import { combineReducers } from 'redux'
export default combineReducers({
    UserState: UserReducer,
    ArticleState: ArticleReducer
  })