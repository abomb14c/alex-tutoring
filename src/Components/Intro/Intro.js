import React from 'react'
import './intro.css'
import icon from '../../assets/intro-pic.png'

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-image"></div>
            <div className="intro-text-container">
                <h1 className="intro-header">What Does Your College <strong className="bold">Pathway</strong> Look Like?</h1>
                <h5 className="intro-text">Preparing for college ensures future success. 
                    High test scores improve admissions odds, 
                    increase scholarship possibilities, and bolster 
                    students' confidence. Standardized tests can 
                    be cracked. It only takes the right content and strategy.
                </h5>
            </div>
        </div>
    )
}

export default Intro;