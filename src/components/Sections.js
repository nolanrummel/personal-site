import React, { useEffect, useState } from "react"

import '../scroller.css'
import { UNSAFE_FetchersContext } from "react-router-dom"

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
            console.log('triggered 1')
            setWheelMove(0)
        } else if (direction === 'up' && wheelMove > 0) {
            console.log('triggered 2')
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
        if (wheelMove > 1500) {
            if (display >= 4) {
                setDisplay(4)
            } else {
                setDisplay(display + 1)   
            }
            setWheelMove(0)
        } else if (wheelMove < -1500) {
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
            <div>
                <div className="s1" style={display == 1 ? {height: '70vh'} : {height: '10vh'}}>
                    <h1>Section 1</h1>
                    <p>Content Shown here. Blah Blah Blah</p>
                </div>
                <div className="s2" style={display == 2 ? {height: '70vh'} : {height: '10vh'}}>
                    <h1>Section 2</h1>
                    <p>Content Shown here. Blah Blah Blah</p>
                </div>
                <div className="s3" style={display == 3 ? {height: '70vh'} : {height: '10vh'}}>
                    <h1>Section 3</h1>
                    <p>Content Shown here. Blah Blah Blah</p>
                </div>
                <div className="s4" style={display == 4 ? {height: '70vh'} : {height: '10vh'}}>
                    <h1>Section 4</h1>
                    <p>Content Shown here. Blah Blah Blah</p>
                </div>
            </div>
        </div>
    )
}