import React from 'react'
import Intro from '../Intro/Intro'
import ScheduleCard from '../ScheduleCard/ScheduleCard'
import './intro-container.css'

const IntroContainer = () => {
    return (
        <div className="intro-container">
            <Intro />
            <ScheduleCard />
        </div>
    )
}

export default IntroContainer