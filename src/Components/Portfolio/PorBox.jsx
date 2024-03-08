import React from 'react'
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

const PorBox = ({ getData }) => {

    return (
        <>
            {getData.map((currElem) => {
                return (
                    <>
                        <div className="por-img" key={currElem.id}>
                            <img className="cursor-color flex" src={currElem.img} alt="" />
                            <p style={{ marginTop: '50px' }} className="cursor-color">{currElem.categories}</p>
                            <h2 style={{ margin: 0 }} >{currElem.prName}</h2>
                            <h2 className='mt-0 pt-0'>{currElem.prName2}</h2>
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default PorBox