import React from 'react'
import NavBar from './NavBar'

const IndividualQuestion = (props) => (
    <div>
        <NavBar/>
        This is individual question. {props.match.params.id}
    </div>
)

export default IndividualQuestion