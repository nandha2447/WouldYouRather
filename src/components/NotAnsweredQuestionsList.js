import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class NotAnsweredQuestionsList extends React.Component{
    render(){
        const imgStyle = {
            width: '50px',
            height: '50px'
        }
        return (
            <div>
            <h3>This is not answered questions list </h3>
            <ul>
            {this.props.authedUserUnAnsweredQuestions.map(question => (
            <li key={question.id}>
                <div>
                    <h3> Would you rather </h3>
                    <img alt="User Avatar" style={imgStyle} src={this.props.users[question.author].avatarURL}/>
                    <Link to={`questions/${question.id}`}>
                        <h4>{question.optionOne.text}</h4>
                    </Link>
                    <Link to={`questions/${question.id}`}>
                        <h4>{question.optionTwo.text}</h4>
                    </Link>
                </div>
            </li>))}   
            </ul>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        authedUser: state.authedUser,
        users: state.users
    }
}

export default connect(mapStateToProps)(NotAnsweredQuestionsList)