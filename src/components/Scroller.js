import React from 'react';
import { Link, Element } from 'react-scroll';
import About from './About';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import '../scroller.css'

export default function Scroller() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="page1" smooth={true} duration={1000}>Page 1</Link></li>
          <li><Link to="page2" smooth={true} duration={1000}>Page 2</Link></li>
          <li><Link to="page3" smooth={true} duration={500}>Page 3</Link></li>
          <li><Link to="page4" smooth={true} duration={500}>Page 4</Link></li>
        </ul>
      </nav>
      <div>
        <Element name="page1" className="page">
            <div className='p1'>
                <h1>Page 1 Content</h1>
            </div>
        </Element>
        <Element name="page2" className="page">
            <div className='p2'>
                <h1>Page 2 Content</h1>
            </div>
        </Element>
        <Element name="page3" className="page">
            {/* <div className='p3'>
                <h1>Page 3 Content</h1>
            </div> */}
            <About />
        </Element>
        <Element name="page4" className="page">
            <div className='p4'>
                <h1>Page 4 Content</h1>
            </div>
        </Element>
      </div>
    </div>
  )
}