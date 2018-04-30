import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware  from './middleware'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
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

const store = createStore(reducer,compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact={true}/>
                <PrivateRoute path="/home" component={HomePage}/>
                <PrivateRoute path="/leaderboard" component={LeaderBoard}/>
                <PrivateRoute path="/add" component={AddQuestion}/>
                <PrivateRoute path="/questions/:id" component={IndividualQuestion}/>
                <PrivateRoute path='/404' component={QuestionNotFound}/>
                <PrivateRoute component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

