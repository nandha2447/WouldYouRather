import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware  from './middleware'
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'
import LoginPage from './components/Login'
import HomePage from './components/HomePage'
import LeaderBoard from './components/LeaderBoard'
import AddQuestion from './components/AddQuestion'
import NotFoundPage from './components/NotFoundPage'
import NavBar from './components/NavBar'

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb){
        this.isAuthenticated = true;
        setTimeout(cb,100) // fake async
    },
    signout(cb){
        this.isAuthenticated = false;
        setTimeout(cb,100)
    }
}

const store = createStore(reducer,compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {/* <Fragment>
                <NavBar /> */}
            <Switch>
                <Route path="/" component={App} exact={true}/>
                {/* <NavBar /> */}
                <Route path="/home" component={HomePage}/>
                <Route path="/leaderboard" component={LeaderBoard}/>
                <Route path="/add" component={AddQuestion}/>
                <Route component={NotFoundPage}/>
                <Route path="/:id" component={NavBar}/>
            </Switch>
            {/* </Fragment> */}
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

