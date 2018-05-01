import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'

const NotFoundPage = () => (
    <div>
        <NavBar />
        <h2>Error 404. We don't have anything to show in this page.</h2> <br/>
        <h3><Link to='/home'>Go Home</Link></h3>
    </div>
)

export default NotFoundPage