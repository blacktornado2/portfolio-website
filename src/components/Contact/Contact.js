import React from 'react'
import './Contact.css'

export default function Contact() {
    const content = (
        <div className="content">
            If you want to connect with me, be it for anything like business, innovation or collabration,<br />
            or simply say a hello, don't hesitate to send me an email at: <a id="e-mail" href="/">bhardwaj21ankit@gmail.com</a>
        </div>
    )

    return (
        <div className="contact">
            <div className="contact-heading">Contact Me</div>
            <div className="content" >{content}</div>
            <div className="coding-profiles">
                <a href="/" className="codechef">Codechef</a>
                <a href="https://auth.geeksforgeeks.org/user/blacktornado2108/profile" className="geeksforgeeks">GeeksforGeeks</a>
                <a href="https://www.hackerrank.com/blacktornado2108" className="hackerrank">HackerRank</a>
                <a href="https://github.com/blacktornado2" className="github">GitHub</a>
            </div>
            
        </div>
    )
}
