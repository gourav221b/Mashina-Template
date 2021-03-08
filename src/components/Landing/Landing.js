import React from 'react'
import './landing.css'
import * as Icon from 'react-icons/fi'
import * as Icon2 from 'react-icons/bi'
function Landing() {
    return (
      
        <div className="landing">
            <div className="headingText">
            Drive into Mashina
            </div>
            <div className="headingPara">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, distinctio!
            </div>
            <div className="headingBtn">
                Read More
            </div>
            <div className="mouseIcon">
                <Icon2.BiMouse size={24}/>
            </div>
        </div>
        
    )
}

export default Landing
