import React, { useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"

import SectionNavBar from "./SectionNavBar"
import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"
import "../styling/sections.css"

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
                <div className="section-1">
                    {display == 1 ?
                        <CSSTransition
                            classNames={"fade"}
                            timeout={300}
                            unmountOnExit
                        >
                            <About />
                        </CSSTransition>
                        :
                        <div className="section-title-container" style={{backgroundColor: '#1c7293'}}>
                            <h1 className="section-title" onClick={() => setDisplay(1)}>ABOUT</h1>
                        </div>
                    }
                </div>
                <div className="section-2">
                    {display == 2 ?
                        <CSSTransition
                        classNames={"fade"}
                        timeout={300}
                        unmountOnExit
                        >
                            <Projects />
                        </CSSTransition>
                        :
                        <div className="section-title-container" style={{backgroundColor: '#065A82'}}>
                            <h1 className="section-title" onClick={() => setDisplay(2)}>PROJECTS</h1>
                        </div>
                    }
                </div>
                <div className="section-3">
                    {display == 3 ?
                        <Resume />
                        :
                        <div className="section-title-container" style={{backgroundColor: '#1B3B6F'}}>
                            <h1 className="section-title" onClick={() => setDisplay(3)}>RESUME</h1>
                        </div>
                    }
                </div>
                <div className="section-4">
                    {display == 4 ?
                        <Contact />
                        :
                        <div className="section-title-container" style={{backgroundColor: '#21295C'}}>
                            <h1 className="section-title" onClick={() => setDisplay(4)}>CONTACT</h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}