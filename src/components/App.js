import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import {connect} from 'react-redux'
import {handleGetUsers} from '../actions/shared'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleGetUsers())
  }
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default connect()(App);
