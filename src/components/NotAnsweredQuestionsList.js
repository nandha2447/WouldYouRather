import React from 'react'
import {connect} from 'react-redux'
import {handleSaveAnswer} from '../actions/answers'
import {Link} from 'react-router-dom'
class NotAnsweredQuestionsList extends React.Component{
    onSelectAnswer(qid,answer){
        console.log();
        console.log(`Answer clicked with id ${qid} and answer ${answer}`);
        this.props.dispatch(handleSaveAnswer({
            authedUser: this.props.authedUser,
            qid,
            answer
        }))
    }
    render(){
        return (
            <div>
            <h3>This is not answered questions list </h3>
            <ul>
            {this.props.authedUserUnAnsweredQuestions.map(question => (
            <li key={question.id}>
                <div>
                    <h3> Would you rather </h3>
                    <img src={this.props.users[question.author].avatarURL}/>
                    <Link to={`questions/${question.id}`} onClick={()=>{this.onSelectAnswer(question.id,'optionOne')}}>
                        <h4>{question.optionOne.text}</h4>
                    </Link>
                    <Link to={`questions/${question.id}`} onClick={()=>{this.onSelectAnswer(question.id,'optionTwo')}}>
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