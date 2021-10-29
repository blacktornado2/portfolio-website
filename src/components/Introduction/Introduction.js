import React from 'react'
import './Introduction.css'

export default function Introduction() {
    const nameHeading = `Hi, I am Ankit Bhardwaj`
    const oneLiner = `A computer science student passionate about programming and web-development`

    return (
        <div className="introduction">
            <div className="name-heading">{nameHeading}</div>
            <div className="one-liner">{oneLiner}</div>
            <a href="/" className="see-work-btn">SEE MY WORK</a>
        </div>
    )
}
