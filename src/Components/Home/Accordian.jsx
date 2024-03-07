import React, { useState } from 'react'

const Accordian = () => {

    const [acrdn, setacrdn] = useState(0);
    const handleAcrdn = (n) => {
        setacrdn(n)
    }

    return (
        <>
            <section className="accordion mb-40">

                <div className="accordion-heading">
                    <p>QUICK</p>
                    <h1>Frequently <span>Asked Questions</span></h1>
                </div>

                <div className={acrdn === 1 ? 'accordion-item active' : 'accordion-item'}
                    onMouseEnter={() => { handleAcrdn(1) }}
                    onMouseLeave={() => { handleAcrdn(0) }}>

                    <div className="accordion-title">
                        Can your tech wizards make my dream project a reality?
                        <i className="fa-solid fa-circle-arrow-up" style={acrdn === 1 ? { transform: 'rotate(-180deg)' } : { transform: 'rotate(0deg)' }}></i>
                    </div>
                    <div className="accordion-content">Absolutely! We thrive on turning dreams into digital realities.</div>
                </div>
                <div className={acrdn === 2 ? 'accordion-item active' : 'accordion-item'}
                    onMouseEnter={() => { handleAcrdn(2) }}
                    onMouseLeave={() => { handleAcrdn(0) }}>
                    <div className="accordion-title">
                        How do I get started with your services?
                        <i className="fa-solid fa-circle-arrow-up" style={acrdn === 2 ? { transform: 'rotate(-180deg)' } : { transform: 'rotate(0deg)' }}></i>
                    </div>
                    <div className="accordion-content">Getting started is easy! Just reach out to our team, and we'll guide you
                        through the process.</div>
                </div>
                <div className={acrdn === 3 ? 'accordion-item active' : 'accordion-item'}
                    onMouseEnter={() => { handleAcrdn(3) }}
                    onMouseLeave={() => { handleAcrdn(0) }}>
                    <div className="accordion-title">
                        What makes your AI/MIL products unique?
                        <i className="fa-solid fa-circle-arrow-up" style={acrdn === 3 ? { transform: 'rotate(-180deg)' } : { transform: 'rotate(0deg)' }}></i>
                    </div>
                    <div className="accordion-content">Our AI/MIL solutions are built for precision and performance, leveraging the
                        latest technologies for outstanding results.</div>
                </div>
                <div className={acrdn === 4 ? 'accordion-item active' : 'accordion-item'}
                    onMouseEnter={() => { handleAcrdn(4) }}
                    onMouseLeave={() => { handleAcrdn(0) }}>
                    <div className="accordion-title">
                        How can I track the progress of my digital marketing campaign?
                        <i className="fa-solid fa-circle-arrow-up" style={acrdn === 4 ? { transform: 'rotate(-180deg)' } : { transform: 'rotate(0deg)' }}></i>
                    </div>
                    <div className="accordion-content">We provide real-time analytics and reports, so you can monitor your
                        campaign's success every step of the way.</div>
                </div>
                <div className={acrdn === 5 ? 'accordion-item active' : 'accordion-item'}
                    onMouseEnter={() => { handleAcrdn(5) }}
                    onMouseLeave={() => { handleAcrdn(0) }}>
                    <div className="accordion-title">
                        How can I contact your support team?
                        <i className="fa-solid fa-circle-arrow-up" style={acrdn === 5 ? { transform: 'rotate(-180deg)' } : { transform: 'rotate(0deg)' }}></i>
                    </div>
                    <div className="accordion-content">You can reach our support team 24/7 through our contact page or email at
                        <a className="cursor-color" href="mailto:haramh643@gmail.com">haramh643@gmail.com</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Accordian