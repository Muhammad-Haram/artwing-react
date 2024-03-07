import React from 'react'
import arrow from '../../assets/images/circle-arrow.png'

const Home = () => {
    return (
        <>
            <section id="hero-banner">
                <div className="hero">
                    <div className="text flex">
                        <div className="text-left">
                            <span>Innovation</span>
                            <span>Unleashed</span>
                        </div>
                        <div className="text-right">
                            <h2>Elevating Digital</h2>
                        </div>
                    </div>
                    <div className="text flex">
                        <h1>Experiences with</h1>
                    </div>
                    <div className="text">
                        <h2>Artistry</h2>
                        <p>Elevating digital experiences via best in className product suite for all
                            your technology solutions, IT, marketing and consulting needs.</p>
                    </div>
                </div>
                <div className="round-box">
                    <div className="round-text rotating">
                        <svg viewBox="0 0 200 200">
                            <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)"
                                fill="none" strokeWidth="0"></path>
                            <g fontSize="16px">
                                <text textAnchor="start">
                                    <textPath className="coloring" xlinkHref="#textPath" startOffset="0%"> . Discover
                                        Solutions . Discover Solutions . Discover Solutions</textPath>
                                </text>
                            </g>
                        </svg>
                    </div>
                    <div className="arrow">
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
