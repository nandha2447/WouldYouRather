import React from 'react'

const NotAnsweredQuestionsList = (props) => (
    <div>
        <h3>This is not answered questions list </h3>
        {props.authedUserUnAnsweredQuestions.map(question => (<h4 key={question.id}>{question.id}</h4>))}   
    </div>
)

export default NotAnsweredQuestionsList