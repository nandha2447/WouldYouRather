import React from 'react'
import {Link} from 'react-router-dom'
const AnsweredQuestionsList = (props) => (
    <div>
        <h3>This is answered questions list </h3>
        <ul>
        {props.authedUserVotedQuestions.map(question => (<li key={question.id}><Link to={`questions/${question.id}`} >{question.author}</Link></li>))}   
        </ul>
    </div>
)

export default AnsweredQuestionsList