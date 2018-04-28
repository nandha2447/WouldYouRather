import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'

const QuestionNotFound = () => (
    <div>
        <NavBar />
        <p> The question you have requested doesn't exist in Database </p>
        <Link to='/home'>Go Home</Link>    
    </div>
)

export default QuestionNotFound