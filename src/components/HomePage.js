import React from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import AnsweredQuestionsList from './AnsweredQuestionsList'
import NotAnsweredQuestionsList from './NotAnsweredQuestionsList'

class HomePage extends React.Component{
    state = {
        isAnswered: false
    }
    onQuestionClick = () => {
        this.setState((prevState)=>({
            isAnswered: !prevState.isAnswered
        }))
    }
    render(){
        //Filter the answered questions by the authenticated user from the list of questions(
        const authedUserVotedQuestions = this.props.questions.filter(question => question.optionOne.votes.indexOf(this.props.authedUser)>-1 || question.optionTwo.votes.indexOf(this.props.authedUser)>-1).sort((a,b)=>b.timestamp-a.timestamp);
        console.log(authedUserVotedQuestions);
        //Unanswered questions by the authenticated user from the list of questions
        const authedUserUnAnsweredQuestions = this.props.questions.filter(question => question.optionOne.votes.indexOf(this.props.authedUser)===-1 && question.optionTwo.votes.indexOf(this.props.authedUser)===-1).sort((a,b)=>b.timestamp-a.timestamp);
        console.log(authedUserUnAnsweredQuestions);
        return(
            <div>
                <NavBar />
                <h1>This is Home Page</h1>
                <button onClick={this.onQuestionClick}>{this.state.isAnswered ? 'Unanswered Questions' : 'Answered Questions'}</button>
                {this.state.isAnswered ? 
                    <AnsweredQuestionsList authedUserVotedQuestions={authedUserVotedQuestions}/> : 
                    <NotAnsweredQuestionsList authedUserUnAnsweredQuestions={authedUserUnAnsweredQuestions}/>
                } 
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        questions: Object.values(state.questions),
        authedUser: state.authedUser
    }
}
export default connect(mapStateToProps)(HomePage)