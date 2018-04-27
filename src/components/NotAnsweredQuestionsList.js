import React from 'react'
import {Link} from 'react-router-dom'

const NotAnsweredQuestionsList = (props) => (
    <div>
        <h3>This is not answered questions list </h3>
        <ul>
        {props.authedUserUnAnsweredQuestions.map(question => (<li key={question.id}><Link to={`questions/${question.id}`}>{question.author}</Link></li>))}   
        </ul>
    </div>
)

export default NotAnsweredQuestionsList