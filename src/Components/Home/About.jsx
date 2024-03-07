import React from 'react'
import about from '../../assets/images/about.jpg'
import symbol from '../../assets/images/Symbol.png'

const About = () => {
    return (
        <>
            <section id="about-section">
                <div className="about-img">
                    <img src={about} alt="" />
                </div>
                <div className="about-content">
                    <h1>About Artwing <span>Alpha</span></h1>
                    <p>At Artwing Alpha, we're not just another agency; we're your technology partner on a fast-growth journey.
                        We offer bespoke services in AI & ML, web development, digital marketing, business consulting and more,
                        tailored to meet the demands of a dynamic global market. Our boutique approach ensures every project is
                        a masterpiece, setting us apart from the competition. Our boutique approach ensures every project is a
                        masterpiece, setting us apart from the competition.</p>
                    <div className="button cursor-color">
                        <p>MORE ABOUT US</p>
                        <img src={symbol} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
