import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'

const NotFoundPage = () => (
    <div>
        <NavBar />
        We don't have anything to show in this page. <br/>
        <Link to='/home'>Go Home</Link>
    </div>
)

export default NotFoundPage