import React from "react"
import { Link } from "react-router-dom"
import { Element, scroller } from "react-scroll"

import '../App.css';

export default function About() {
    const scrollToHome = () => {
        scroller.scrollTo('home-section' , {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        })
    }

    return (
        <div className="h-screen">
            <h1>that wuz dumb</h1>
            {/* <Element name="about-section" className="element">
                <div>
                    <h1>About</h1>
                    <p>I'm Nolan, yo</p>
                    <Link go="/home" onClick={scrollToHome}>
                        Go to Home
                    </Link>
                </div>
            </Element> */}
        </div>
    )
}