import React from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'

class LeaderBoard extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <NavBar />
                This is LeaderBoard Page
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Avatar</th>
                        <th>Number of questions asked</th>
                        <th>Number of questions answered</th>
                    </tr>
                {this.props.users.map((user)=> (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td><img src={user.avatarURL} width="50px" height="50px" alt="User Avatar"/></td>
                        <td>{this.props.usersObject[user.id].questions.length}</td>
                        <td>{Object.keys(this.props.usersObject[user.id].answers).length}</td>
                    </tr>
                ))}
                    </tbody>
                </table>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        users: Object.values(state.users),
        usersObject: state.users
    }
}

export default connect(mapStateToProps)(LeaderBoard)