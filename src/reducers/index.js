import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'
import { routerReducer} from 'react-router-redux'

export default combineReducers({
    authedUser,
    users,
    questions,
    router: routerReducer
})