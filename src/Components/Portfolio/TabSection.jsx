import React, { useState } from 'react';
import PorBox from './PorBox';
import redbull from '../../assets/images/home.jpg'
import gympweb from '../../assets/images/portfolio.jpg'
import nexus from '../../assets/images/pitch_deck.jpg'
import realstate from '../../assets/images/real-estate.jpg'
import bee from '../../assets/images/pitch-dec-1.jpg'
import redbull2 from '../../assets/images/portfolio-new-3.jpg'
import adq from '../../assets/images/portfolio-new-2.jpg'
import palm from '../../assets/images/portfolio-new-4.jpg'
import indigo from '../../assets/images/indigo_portfolio_long.jpg'
import inner from '../../assets/images/portfolio-new-5.jpg'
import sneaker from '../../assets/images/portfolio-new-7.jpg'
import shevy from '../../assets/images/portfolio-new-1.jpg'
import shirt from '../../assets/images/brand_img_2.jpg'
import chuckles from '../../assets/images/chuckles.jpg'
import shine from '../../assets/images/brand-main.png'
import online from '../../assets/images/seo_image2.jpg'
import cars from '../../assets/images/seo_image1.jpg'
import zuni from '../../assets/images/smm-1.jpg'
import a1 from '../../assets/images/a1_portfolio.jpg'
import onthego from '../../assets/images/social-mainpage.jpg'
import chapternine from '../../assets/images/smm-4.jpg'


const TabSection = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const data = [
        {
            img: redbull,
            categories: "Website Development",
            prName: "Warehouse Gym",
            prName2: "Website Design"
        },
        {
            img: gympweb,
            categories: "Website Development",
            prName: "Warehouse Gym",
            prName2: "Website Design"
        },
        {
            img: nexus,
            categories: "Pitch Desk",
            prName: "Nexus Wave",
        },
        {
            img: realstate,
            categories: "Pitch Desk",
            prName: "Real Estate",
        },
        {
            img: bee,
            categories: "Pitch Desk",
            prName: "BEE LLC",
        },
        {
            img: adq,
            categories: "Website Development",
            prName: "ADQ Website",
            prName2: "Design"
        },
        {
            img: redbull2,
            categories: "UI/UX",
            prName: "Red Bull Illume",
            prName2: "Website Design"
        },
        {
            img: palm,
            categories: "UI/UX",
            prName: "W Palm Website",
            prName2: "Design"
        },
        {
            img: indigo,
            categories: "UI/UX",
            prName: "Indigo Real Estate",
            prName2: "Website Design"
        },
        {
            img: inner,
            categories: "E-Commerce",
            prName: "Inner Fight",
            prName2: "Website Design"
        },
        {
            img: sneaker,
            categories: "E-Commerce",
            prName: "Sneaker Surge",
            prName2: "Page Design"
        },

        {
            img: shevy,
            categories: "E-Commerce",
            prName: "Shevy Landing",
            prName2: "Page Design"
        },

        {
            img: shirt,
            categories: "Design",
            prName: "ASTOURAB",
            prName2: "Brand Identity"
        },

        {
            img: chuckles,
            categories: "Design",
            prName: "Chuckles",
            prName2: "Brand Identity"
        },

        {
            img: shine,
            categories: "Design",
            prName: "Sieny's",
            prName2: "Brand Identity"
        },

        {
            img: online,
            categories: "Seo",
            prName: "Online",
            prName2: "Groceries"
        },
        {
            img: cars,
            categories: "Seo",
            prName: "Cars Spare",
            prName2: "Parts"
        },
        {
            img: zuni,
            categories: "Social Media",
            prName: "Zuni"
        },
        {
            img: a1,
            categories: "Social Media",
            prName: "A1 Jewellery"
        },
        {
            img: onthego,
            categories: "Social Media",
            prName: "BreakFast",
            prName2: "On The Go"
        },
        {
            img: chapternine,
            categories: "Social Media",
            prName: "Chapter Nine"
        }


    ]

    return (
        <div className="w-100">
            <div className="flex flex-wrap">
                <button
                    onClick={() => handleTabClick(1)}
                    className={`${activeTab === 1 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    All
                </button>

                <button
                    onClick={() => handleTabClick(2)}
                    className={`${activeTab === 2 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    Website UI/UX & Development
                </button>

                <button
                    onClick={() => handleTabClick(3)}
                    className={`${activeTab === 3 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    AI/ML
                </button>

                <button
                    onClick={() => handleTabClick(4)}
                    className={`${activeTab === 4 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    E-Commerce
                </button>

                <button
                    onClick={() => handleTabClick(5)}
                    className={`${activeTab === 5 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    Digital Marketing (Lead Gen & PPC)
                </button>

                <button
                    onClick={() => handleTabClick(6)}
                    className={`${activeTab === 6 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    Brand Identity & Consultation
                </button>

                <button
                    onClick={() => handleTabClick(7)}
                    className={`${activeTab === 7 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    SEO Services

                </button>

                <button
                    onClick={() => handleTabClick(8)}
                    className={`${activeTab === 8 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    Business Proposal & Pitch Decks
                </button>

                <button
                    onClick={() => handleTabClick(9)}
                    className={`${activeTab === 9 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    Social Media Marketing
                </button>
            </div>

            <div className="m-0">
                <div className={`${activeTab === 1 ? '' : 'hidden'}`}>
                    <section id="portfolio">
                        <div className="por-container">
                            <div className="por-sub flex-wrap">
                                {data.map((item, i) => {
                                    return <>
                                        <PorBox data={item} />
                                    </>
                                })}
                            </div>
                        </div>
                    </section>
                </div>

                <div className={`${activeTab === 2 ? '' : 'hidden'}`}>
                </div>

                <div className={`${activeTab === 3 ? '' : 'hidden'}`}>
                    <img src="image3.jpg" alt="Image 3" className="w-full mb-4" />
                    <p>Content of Tab 3</p>
                </div>

                <div className={`${activeTab === 4 ? '' : 'hidden'}`}>
                    <img src="image3.jpg" alt="Image 4" className="w-full mb-4" />
                    <p>Content of Tab 3</p>
                </div>

                <div className={`${activeTab === 5 ? '' : 'hidden'}`}>
                    <img src="image3.jpg" alt="Image 4" className="w-full mb-4" />
                    <p>Content of Tab 3</p>
                </div>

                <div className={`${activeTab === 6 ? '' : 'hidden'}`}>
                    <img src="image3.jpg" alt="Image 4" className="w-full mb-4" />
                    <p>Content of Tab 3</p>
                </div>

                <div className={`${activeTab === 7 ? '' : 'hidden'}`}>
                    <img src="image3.jpg" alt="Image 4" className="w-full mb-4" />
                    <p>Content of Tab 3</p>
                </div>

                <div className={`${activeTab === 8 ? '' : 'hidden'}`}>
                    <img src="image3.jpg" alt="Image 4" className="w-full mb-4" />
                    <p>Content of Tab 3</p>
                </div>

                <div className={`${activeTab === 9 ? '' : 'hidden'}`}>
                    <img src="image3.jpg" alt="Image 4" className="w-full mb-4" />
                    <p>Content of Tab 3</p>
                </div>
            </div>
        </div>
    );
};

export default TabSection;