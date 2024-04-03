import React, { useState } from 'react';
import PorBox from './PorBox';
import PortfolioData from './PorApi';

const TabSection = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [getData, setgetData] = useState(PortfolioData)

    const handleTabClick = (tabnumber, catergory) => {

        const updated = getData.filter((currElem) => {
            return currElem.categories === catergory
        })
        setgetData([...getData, updated])
        setActiveTab(tabnumber)
    }

    return (
        <div className="w-100">
            <div className="flex flex-wrap">
                <button
                    onClick={() => handleTabClick(1, getData)}
                    className={`${activeTab === 1 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >All
                </button>

                <button
                    onClick={() => handleTabClick(2, "Website Development")}
                    className={`${activeTab === 2 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    Website UI/UX & Development
                </button>

                <button
                    onClick={() => handleTabClick(3, "AI/ML")}
                    className={`${activeTab === 3 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    AI/ML
                </button>

                <button
                    onClick={() => handleTabClick(4, "E-Commerce")}
                    className={`${activeTab === 4 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    E-Commerce
                </button>

                <button
                    onClick={() => handleTabClick(5, "Digital Market")}
                    className={`${activeTab === 5 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    Digital Marketing (Lead Gen & PPC)
                </button>

                <button
                    onClick={() => handleTabClick(6, "Design")}
                    className={`${activeTab === 6 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    Brand Identity & Consultation
                </button>

                <button
                    onClick={() => handleTabClick(7, "Seo")}
                    className={`${activeTab === 7 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    SEO Services

                </button>

                <button
                    onClick={() => handleTabClick(8, "Pitch Desk")}
                    className={`${activeTab === 8 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    Business Proposal & Pitch Decks
                </button>

                <button
                    onClick={() => handleTabClick(9, "Social Media")}
                    className={`${activeTab === 9 ? 'text-black bg-white' : 'text-white bg-[#060606]'
                        } flex-grow py-2 px-4 focus:outline-none rounded-2xl border-solid border-[1px] border-white m-3 max-w-[300px]`}
                >
                    Social Media Marketing
                </button>
            </div>

            <section id="portfolio">
                <div className="por-container">
                    <div className="por-sub flex-wrap">
                        <PorBox getData={getData} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TabSection;