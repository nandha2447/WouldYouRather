import React from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'
import './App.css'
/* loggedInUser - The value which stays in all pages */
const NavBar = (props) => (
    <div>
        <NavLink to="/home" activeClassName='navActiveColor'>Home</NavLink>
        <NavLink to="/leaderboard" activeClassName='navActiveColor'>Leaderboard</NavLink>
        <NavLink to="/add" activeClassName='navActiveColor'>Add Question</NavLink>
        This is {props.loggedInUser} logging in.
        <NavLink to="/" onClick={()=>{props.dispatch(setAuthedUser(null))}}>Logout</NavLink>
    </div>
)

const mapStateToProps = (state) => {
    return {
        loggedInUser: state.authedUser 
    }
}

export default connect(mapStateToProps)(NavBar)