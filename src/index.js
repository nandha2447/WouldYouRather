import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware  from './middleware'
import {Route, Switch, Redirect} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {history} from './middleware'
import HomePage from './components/HomePage'
import LeaderBoard from './components/LeaderBoard'
import AddQuestion from './components/AddQuestion'
import NotFoundPage from './components/NotFoundPage'
import IndividualQuestion from './components/IndividualQuestion'
import QuestionNotFound from './components/QuestionNotFound'

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb){
        // cb();
        this.isAuthenticated = true;
        setTimeout(cb,100) // fake async
    },
    signout(cb){
        cb();
        this.isAuthenticated = false;
        setTimeout(cb,100)
    }
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props)=>(
        fakeAuth.isAuthenticated === true 
            ? <Component {...props}/>
            : <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }}/>
    )} />
)

function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    }catch(e){
        console.log(e)
    }
}

function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch(e){
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()
const store = createStore(reducer,persistedState,compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

store.subscribe(()=> saveToLocalStorage(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={App} exact={true}/>
                <PrivateRoute path="/home" component={HomePage}/>
                <PrivateRoute path="/leaderboard" component={LeaderBoard}/>
                <PrivateRoute path="/add" component={AddQuestion}/>
                <Route path="/questions/:id" component={IndividualQuestion}/>
                <Route path='/404' component={QuestionNotFound}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));

