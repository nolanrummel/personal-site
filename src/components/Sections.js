import React, { useEffect, useState } from "react"

import SectionNavBar from "./SectionNavBar"
import About from "./About"
import "../styling/sections.css"
// import '../scroller.css'

export default function Sections() {
    const [display, setDisplay] = useState(1)
    const [wheelMove, setWheelMove] = useState(0)
    const [direction, setDirection] = useState('')

    //adds scroll movements together to set wheelMove number
    //sets direction
    const handleWheel = (e) => {
        if (e.deltaY > 0 ) {
            setDirection('down')
        } else if (e.deltaY < 0) {
            setDirection('up')
        }
        setWheelMove((prevWheelMove) => prevWheelMove + e.deltaY)
    }

    //resets wheelMove back to 0 when scroll direction changes 
    //(speeds up time between direction changes)
    useEffect(() => {
        if (direction === 'down' && wheelMove < 0) {
            setWheelMove(0)
        } else if (direction === 'up' && wheelMove > 0) {
            setWheelMove(0)
        }
    }, [direction])

    //adds EventListener for wheel motion (removes when ummounted)
    useEffect(() => {
        window.addEventListener('wheel', handleWheel)

        // return () => {
        //     window.removeEventListener('wheel', handleWheel)
        // }
    }, [])

    //checks if wheelMove has passed the threshold to change sections
    useEffect(() => {
        if (wheelMove > 1800) {
            if (display >= 4) {
                setDisplay(4)
            } else {
                setDisplay(display + 1)   
            }
            setWheelMove(0)
        } else if (wheelMove < -1800) {
            if (display <= 1) {
                setDisplay(1)
            } else {
                setDisplay(display -1)
            }
            setWheelMove(0)
        }
    }, [wheelMove])
    
    return (
        <div>
            <div className="section-nav-container">
                <SectionNavBar display={display} setDisplay={setDisplay} setWheelMove={setWheelMove}/>
            </div>
            <div>
                <div classname="section-1">
                    {display == 1 ?
                        <About />
                        :
                        <div className="section-collapsed" style={{backgroundColor: 'red'}}>
                            <h1>About</h1>
                        </div>
                    }
                </div>
                <div className="s2" style={display == 2 ? {height: '85vh'} : {height: '5vh'}}>
                    <h1>Projects</h1>
                </div>
                <div className="s3" style={display == 3 ? {height: '85vh'} : {height: '5vh'}}>
                    <h1>Resume</h1>
                </div>
                <div className="s4" style={display == 4 ? {height: '85vh'} : {height: '5vh'}}>
                    <h1>Contact</h1>
                </div>
            </div>
        </div>
    )
}