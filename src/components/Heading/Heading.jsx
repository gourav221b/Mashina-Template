import React from 'react'
import './heading.css'
function Heading(props) {
    return (
        <div className="titleDiv">
            <h1 className="titleText">{props.title}</h1>
            <p className="titlepara">{props.details}</p>
        </div>
    )
}

export default Heading
