import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {setAuthedUser} from '../actions/authedUser'

class Login extends Component{
    // Handler to set the authenticated user from the list of available users
    handleLoginClick(id){
        this.props.dispatch(setAuthedUser(id))
    }
    render(){
        return(
            <div>
               {this.props.userIds.map((user)=>
                    (<Link onClick={()=>this.handleLoginClick(user.id)} key={user.id} to='/home'><button>{user.name}</button></Link>))}
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