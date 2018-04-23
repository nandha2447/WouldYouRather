import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        We don't have anything to show in this page. <br/>
        <Link to='/'>Go Home</Link>
    </div>
)

export default NotFoundPage