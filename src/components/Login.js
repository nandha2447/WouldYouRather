import React,{Component} from 'react'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {fakeAuth} from '../index'
import {Redirect} from 'react-router-dom'

class Login extends Component{
    state={
        redirectToReferrer: false
    }
    // Handler to set the authenticated user from the list of available users
    handleLoginClick(id){
        fakeAuth.authenticate(()=>{
            this.setState({
                redirectToReferrer: true
            })
        })
        this.props.dispatch(setAuthedUser(id))
    }
    render(){
        const { redirectToReferrer } = this.state
        const { from } = this.props.location.state || { from: { pathname: "/home" } };
        if(redirectToReferrer === true){
            return(
                <Redirect to={from}/>
            )
        }
        return(
            <div>
                <p>You must login as a user to access the application!!</p>
               {this.props.userIds.map((user)=>
                    (<button onClick={()=>this.handleLoginClick(user.id)} key={user.id}>{user.name}</button>))}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userIds: Object.values(state.users)        
    }
}

export default connect(mapStateToProps)(Login)