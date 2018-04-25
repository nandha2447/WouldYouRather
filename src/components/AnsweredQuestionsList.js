import React from 'react'

const AnsweredQuestionsList = (props) => (
    <div>
        <h3>This is answered questions list </h3>
        {props.authedUserVotedQuestions.map(question => (<h4 key={question.id}>{question.id}</h4>))}   
    </div>
)

export default AnsweredQuestionsList