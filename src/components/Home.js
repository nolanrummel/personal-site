import React from "react"
import { Link } from "react-router-dom"
import { Element, scroller } from "react-scroll"

import '../App.css';

export default function Home() {
    const scrollToAbout = () => {
        scroller.scrollTo('about-section' , {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        })
    }

    return (
        <div>
            <Element name="home-section" className="element">
                <div>
                    <h1>Home</h1>
                    <p>Welcome to the Site</p>
                    <Link go="/about" onClick={scrollToAbout}>
                        Go to About
                    </Link>
                </div>
            </Element>
        </div>
    )
}