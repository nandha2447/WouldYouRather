import React,{Fragment} from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {handleSaveAnswer} from '../actions/answers'
import {fakeAuth} from '../index'
import {push} from 'react-router-redux'

class IndividualQuestion extends React.Component{
    onSelectAnswer(qid,answer){
        this.props.dispatch(handleSaveAnswer({
            authedUser: this.props.authedUser,
            qid,
            answer
        }))
    }
    render(){
        let isOptionOne;
        const imgStyle = {
            width: '50px',
            height: '50px'
        }
        if((Object.values(this.props.questions)
            .filter(question => question.id === this.props.match.params.id)).length === 0){
                fakeAuth.authenticate(()=>{this.props.dispatch(push('/404'))})
                return(
                    <Redirect to='/404'/>
                )
        }
        else{
        const particularQuestion = Object.values(this.props.questions)
        .find(question => question.id===this.props.match.params.id);
        const isAnswered = particularQuestion.optionOne.votes.indexOf(this.props.authedUser)>-1 || particularQuestion.optionTwo.votes.indexOf(this.props.authedUser)>-1;
        const isUnanswered = !isAnswered;
        if(isUnanswered){
                return (
                    <div>
                        <NavBar/>
                        <ul>
                        {Object.values(this.props.questions)
                            .filter(question => question.id === this.props.match.params.id)
                            .map(question => (
                            <li key={question.id}>
                                <div>
                                    <h3> Would you rather </h3>
                                    <img alt="User Avatar" style={imgStyle} src={this.props.users[question.author].avatarURL}/>
                                    <Link to='/home' onClick={()=>{this.onSelectAnswer(question.id,'optionOne')}} >
                                        <h4>{question.optionOne.text}</h4>
                                    </Link>
                                    <Link to='/home' onClick={()=>{this.onSelectAnswer(question.id,'optionTwo')}} >
                                        <h4>{question.optionTwo.text}</h4>
                                    </Link>
                                </div>
                            </li>
                        ))}    
                        </ul>
                    </div>
                )
        }
        if(isAnswered) {
            const selectedOption = {
                color: 'green'
            }
            const unSelectedOption = {
                color: 'red'
            }
            return(
                Object.values(this.props.questions)
                        .filter(question => question.id === this.props.match.params.id)
                        .map(question => (
                            <Fragment key={question.id}>
                            <NavBar/>
                            <div>
                            {
                                question.optionOne.votes.length !== 0 && 
                                question.optionOne.votes.indexOf(this.props.authedUser) > -1 ?
                                isOptionOne = true : isOptionOne = false
                            }
                            <h3 style={selectedOption}>Green marks your selected option</h3>
                            <img alt="User Avatar" style={imgStyle} src={this.props.users[question.author].avatarURL}/>
                            <Link to='/home'>
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
                            </div>
                            </Fragment>
                        ))
            )
        }
    }
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