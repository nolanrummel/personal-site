import React from "react"

import "../styling/sections.css"

export default function SectionNavBar({display, setDisplay, setWheelMove}) {
    const handleDisplay = (e) => {
        const section = parseFloat(e.target.id)
        setDisplay(section)
        setWheelMove(0)
    }
    
    return (
        <div>
            {[1, 2, 3, 4].map((item) => (
                <div className="circles-container" key={item}>
                    <div className="section-navbar-circles"
                        id={item}
                        style={item == display ? {opacity: .75} : {opacity: .15}}
                        onClick={(e) => handleDisplay(e)}
                    ></div>
                </div>
            ))}
        </div>
    )
}