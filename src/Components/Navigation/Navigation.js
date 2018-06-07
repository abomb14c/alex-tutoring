import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../Constants/Routes'
import './navigation.css'
const Navigation = () => {
    return (
        <div className="nav-bar">
            <ul>
                <li><Link to={routes.HOME}>Home</Link></li>
                <li><Link to ={routes.TESTIMONIALS}>Testimonials</Link></li>
                <li><Link to ={routes.CONTACT}>Contact</Link></li>
                <li><Link to ={routes.ABOUT_ME}>About Me</Link></li>
                <li><Link to ={routes.RESOURCES}>Resources</Link></li>
                <li><Link to ={routes.BLOG}>Blog</Link></li>
            </ul>
        </div>
    )
}

export default Navigation