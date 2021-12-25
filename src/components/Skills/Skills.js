import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-content">
        <div className="skill-1"> Data Structures And Algorithms
          <div className="skill-1-meter"></div>
        </div>
        <div className="skill-2">C++
          <div className="skill-2-meter"></div>
        </div>
        <div className="skill-3">Javascript
          <div className="skill-3-meter"></div>
        </div>
        <div className="skill-4">OOPS
          <div className="skill-4-meter"></div>
        </div>
        <div className="skill-5">DBMS (MySQL)
          <div className="skill-5-meter"></div>
        </div>
        <div className="skill-6">Operating Systems
          <div className="skill-6-meter"></div>
        </div>
      </div>
    </div>
  )
}

export default Skills
