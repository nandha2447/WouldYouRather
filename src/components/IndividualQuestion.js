import React from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class IndividualQuestion extends React.Component{
    render(){
        const selectedOption = {
            color: 'green'
        }
        const unSelectedOption = {
            color: 'red'
        }
        let isOptionOne;
        console.log(Object.values(this.props.questions).filter(question => question.id === this.props.match.params.id))
        console.log(this.props.users)
        return (
            <div>
                <NavBar/>
                {
                    Object.values(this.props.questions)
                        .filter(question => question.id === this.props.match.params.id)
                        .map(question => (
                            <div key={question.id}>
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
                            </div>
                        ))
                }
                <Link to="/home">Answer More Questions</Link>
            </div>
        )
    }
}

function mapStateToProps({questions,users,authedUser}){
    return {
        questions,
        totalNumberOfUsers: Object.values(users).length,
        users,
        authedUser
    }
}
export default connect(mapStateToProps)(IndividualQuestion)