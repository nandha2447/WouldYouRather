import React from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'

/* loggedInUser - The value which stays in all pages */
const NavBar = (props) => (
    <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/leaderboard">Leaderboard</NavLink>
        <NavLink to="/add">Add Question</NavLink>
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