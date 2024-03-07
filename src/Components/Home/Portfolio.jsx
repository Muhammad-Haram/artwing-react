import React from 'react'

const Portfolio = () => {
    return (
        <>
            <section id="portfolio">
                <div className="por-text">
                    <p>OUR PORTFOLIO</p>
                    <h1>See What<span> Sets Us Apart</span></h1>
                </div>

                <div className="por-container">
                    <div className="por-sub">
                        <div className="por-img">
                            <img className="cursor-color" src="https://artwingalpha.com/assets/images/portfolio-new.webp" alt="" />
                            <p className="cursor-color">Website Development</p>
                            <h2>Warehouse Gym <br />
                                Website Design</h2>
                        </div>

                        <div className="por-img">
                            <img className="cursor-color" src="https://artwingalpha.com/assets/images/portfolio-new-1.webp" alt="" />
                            <p className="cursor-color">UI/UX</p>
                            <h2>Shevy Landing <br />
                                Page Design</h2>
                        </div>
                    </div>

                    <div className="por-sub">
                        <div className="por-img">
                            <img className="cursor-color" src="https://artwingalpha.com/assets/images/pitch-dec-1.webp" alt="" />
                            <p className="cursor-color">Pitch Desk</p>
                            <h2>BEE <br />
                                Energy LLC</h2>
                        </div>

                        <div className="por-img">
                            <img className="cursor-color" src="https://artwingalpha.com/assets/images/seiny's-branding-home.webp"
                                alt="" />
                            <p className="cursor-color">Brand Identity</p>
                            <h2>Seiny's <br />
                                Branding</h2>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Portfolio