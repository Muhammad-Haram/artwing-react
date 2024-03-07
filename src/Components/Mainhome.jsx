import React from 'react'
import Home from './Home/Home'
import Marquee from './Home/Marquee'
import About from './Home/About'
import Services from './Home/Services'
import Portfolio from './Home/Portfolio'
import Makebrand from './Home/Makebrand'
import Accordian from './Home/Accordian'
import Testimonial from './Home/testimonial'

const Mainhome = () => {
    return (
        <>
            <Home />
            <Marquee />
            <About />
            <Services />
            <Makebrand />
            <Portfolio />
            <Accordian />
            <Testimonial/>
        </>
    )
}

export default Mainhome