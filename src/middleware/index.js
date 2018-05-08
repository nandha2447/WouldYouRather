import thunk from 'redux-thunk'
import logger from './logger'
import {applyMiddleware} from 'redux'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware} from 'react-router-redux'

export const history = createHistory()
const middleware = routerMiddleware(history)

export default applyMiddleware(
    thunk,
    logger,
    middleware
)