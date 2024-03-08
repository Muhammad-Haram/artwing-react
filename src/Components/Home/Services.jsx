import React, { useState } from 'react'

// import ser1 from '../../assets/images/Home.jpg'

const Services = () => {

    const [imgData, setimgData] = useState('')

    return (
        <>
            <section id="services">
                <div className="container">
                    <div className="ser-text">
                        <p>Services</p>
                        <h1>Your <span>Digital Success</span> Story
                            Starts Here</h1>
                    </div>

                    <div className="ser-box"
                        data-img="">
                        <div className="ser-box-text">
                            <h2>Website UI/UX
                                <br />
                                & Development
                            </h2>
                            <span>01</span>
                        </div>
                        <div className="ser-box-text">
                            <p>Crafting exceptional websites with user-centric design, engaging content, and responsive
                                functionality. We create seamless user experiences that leave a lasting impact.</p>

                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Creative Website Design.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Responsive Web Development.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Interactive User Experience.
                                </li>
                            </ul>
                        </div>
                        <div className="ser-box-text">
                            <span>Read More</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <div className="ser-box"
                        data-img="">
                        <div className="ser-box-text">
                            <h2>AI/ML Solutions</h2>
                            <span>02</span>
                        </div>
                        <div className="ser-box-text">
                            <p>Pioneering AI and machine learning solutions, unleashing innovation and data-driven insights to
                                transform concepts into reality.</p>

                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Generative AI.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Chatbots.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Digital Assistants.
                                </li>
                            </ul>
                        </div>
                        <div className="ser-box-text">
                            <span>Read More</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <div className="ser-box"
                        data-img="https://artwingalpha.com/assets/images/e-commerce-main.webp">
                        <div className="ser-box-text">
                            <h2>E-Commerce
                                <br />
                                Services
                            </h2>
                            <span>03</span>
                        </div>
                        <div className="ser-box-text">
                            <p>Elevating online retail with captivating online store designs, seamless payment integration, and
                                conversion optimization to boost sales and customer engagement.</p>

                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Custom E-Commerce Solutions.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Mobile-First E-commerce.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Easy Content Management Solutions.
                                </li>
                            </ul>
                        </div>
                        <div className="ser-box-text">
                            <span>Read More</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <div className="ser-box"
                        data-img="https://artwingalpha.com/assets/images/d-market-main.webp">
                        <div className="ser-box-text">
                            <h2>Digital Marketing
                                <br />
                                Lead Gen & PPC
                            </h2>
                            <span>04</span>
                        </div>
                        <div className="ser-box-text">
                            <p>Driving digital success through lead generation and PPC advertising, meticulously managing ad
                                campaigns, and optimizing for maximum impact.</p>

                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Targeted Lead Generation.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Comprehensive PPC Management.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    High-Converting Landing Pages.
                                </li>
                            </ul>
                        </div>
                        <div className="ser-box-text">
                            <span>Read More</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <div className="ser-box"
                        data-img="https://artwingalpha.com/assets/images/brand-main.webp">
                        <div className="ser-box-text">
                            <h2>Brand Identity
                                <br />
                                & Consultation
                            </h2>
                            <span>05</span>
                        </div>
                        <div className="ser-box-text">
                            <p>Coalescing brand missions and value propositions into distinctive identities. We create brand
                                stories through research, workshops, and stakeholder interviews.</p>

                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Brand Discovery Workshops.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Market Research and Analysis.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Logo and Visual Identity.
                                </li>
                            </ul>
                        </div>
                        <div className="ser-box-text">
                            <span>Read More</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <div className="ser-box"
                        data-img="https://artwingalpha.com/assets/images/seo-mainpage.webp">

                        <div className="ser-box-text">
                            <h2>Search Engine
                                <br />
                                Optimization
                            </h2>
                            <span>06</span>
                        </div>
                        <div className="ser-box-text">
                            <p>Unlocking digital discoverability through on-page and off-page SEO, keyword analysis, and audits.
                                Our goal is to help your brand shine in the digital realm.</p>

                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Comprehensive SEO Audits.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Keyword Research and Strategy.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    On-Page SEO Optimization.
                                </li>
                            </ul>
                        </div>
                        <div className="ser-box-text">
                            <span>Read More</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <div className="ser-box"
                        data-img="https://artwingalpha.com/assets/images/bee-llc-hover.webp">
                        <div className="ser-box-text">
                            <h2>Business Proposal
                                <br />
                                & Pitch Decks
                            </h2>
                            <span>07</span>
                        </div>
                        <div className="ser-box-text">
                            <p>Creating persuasive proposals and pitch decks. Visual design and content optimization make your
                                pitches irresistible.</p>

                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Compelling Pitch Deck Design.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Market Research and Competitive Analysis.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Financial Projections and ROI Analysis.
                                </li>
                            </ul>
                        </div>
                        <div className="ser-box-text">
                            <span>Read More</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>

                    <div className="ser-box"
                        data-img="https://artwingalpha.com/assets/images/social-mainpage.webp">
                        <div className="ser-box-text">
                            <h2>Social Media
                                <br />
                                Marketing
                            </h2>
                            <span>08</span>
                        </div>
                        <div className="ser-box-text">
                            <p>Crafting stories that connect and engage your audience on social media. Our strategic approach
                                and captivating content set the standard for social media success.</p>

                            <ul>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Social Media Strategy Development.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Content Creation and Curation.
                                </li>
                                <li>
                                    <i className="fa-solid fa-check"></i>
                                    Community Engagement and Management.
                                </li>
                            </ul>
                        </div>
                        <div className="ser-box-text">
                            <span>Read More</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Services
