import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class AnsweredQuestionsList extends React.Component{
    render(){
        const selectedOption = {
            color: 'green'
        }
        const unSelectedOption = {
            color: 'red'
        }
        let isOptionOne;
        return (
            <div>
            <h3>This is answered questions list.</h3>
            <h3 style={selectedOption}>Green marks your selected option</h3>
            <ul>
            {this.props.authedUserVotedQuestions.map(question => 
                (<li key={question.id}>
                    <Link to={`questions/${question.id}`} >
                    
                    {
                        question.optionOne.votes.length !== 0 && 
                        question.optionOne.votes.indexOf(this.props.authedUser) > -1 ?
                        isOptionOne = true : isOptionOne = false
                    }

                    <h4 style={isOptionOne ? selectedOption : unSelectedOption}>
                    <span>Option One:  </span>{question.optionOne.text}<br/>
                    <span>voted by</span> totally {question.optionOne.votes.length} user/users and &nbsp;
                    {parseFloat(question.optionOne.votes.length/this.props.totalNumberOfUsers*100).toFixed(2)}% of total users
                    </h4>

                    <h4 style={isOptionOne ? unSelectedOption : selectedOption}><span>Option Two:  </span>{question.optionTwo.text}<br/>
                    <span>voted by</span> totally {question.optionTwo.votes.length} user/users and &nbsp;
                    {parseFloat(question.optionTwo.votes.length/this.props.totalNumberOfUsers*100).toFixed(2)}% of total users
                    </h4>
                    </Link>
                </li>))}   
            </ul>
        </div>
        )
    }
}

function mapStateToProps({authedUser, users}){
    return{
        authedUser,
        totalNumberOfUsers: Object.values(users).length,
        users
    }
}

export default connect(mapStateToProps)(AnsweredQuestionsList)