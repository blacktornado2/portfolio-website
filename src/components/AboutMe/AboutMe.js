import React from 'react'
import './AboutMe.css'
import pic from '../../Media/my-pic.jpg'

function AboutMe() {
    const intro = `Hi, Welcome to my portfolio.
     I’m a frontend developer, and I specialize in efficient React apps and CSS and HTML that just work across all platforms and browsers. I care deeply about building interfaces that are usable and pleasant for the most number of people possible.`;
    return (
        <div className="about-me">
            <div className="about-me-heading">About Me</div>
            <div className="about-me-intro">
                <div className="profile-pic"><img src={pic} alt="" /></div>
                <div className="intro">{intro}</div>
            </div>
        </div>
    )
}

export default AboutMe
