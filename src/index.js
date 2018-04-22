import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware  from './middleware'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginPage from './components/Login'
import HomePage from './components/HomePage'
import LeaderBoard from './components/LeaderBoard'
import AddQuestion from './components/AddQuestion'
import NotFoundPage from './components/NotFoundPage'

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={LoginPage} exact={true}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/leaderboard" component={LeaderBoard}/>
            <Route path="/add" component={AddQuestion}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
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
                <Route path="/home" component={HomePage}/>
                <Route path="/leaderboard" component={LeaderBoard}/>
                <Route path="/add" component={AddQuestion}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

