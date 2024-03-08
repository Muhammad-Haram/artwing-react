import React, { useState } from 'react'
import SerRow from './Services/SerRow'
import icBrand from '../assets/images/services/brand-img.png'
import icEcommerce from '../assets/images/services/ecommerce.jpg'
import icPerform from '../assets/images/services/performance.png'
import icPitch from '../assets/images/services/pitch-icon.jpg'
import icSeo from '../assets/images/services/seo-icon.jpg'
import icSoacialIcon from '../assets/images/services/social-icon.jpg'
import icwebDe from '../assets/images/services/web-design.jpg'
import devopimg from '../assets/images/services/devop-2.png'
import Marketimg from '../assets/images/services/d-market-1.png'
import ecomImg from '../assets/images/services/e-commerce.png'
import Ai from '../assets/images/services/image-ai.jpg'
import pitchImg from '../assets/images/services/pitch-2.jpg'
import sImg from '../assets/images/services/seinys.jpg'
import seoImg from '../assets/images/services/seo-1.jpg'
import Social from '../assets/images/services/social-2.jpg'
import symbol from '../assets/images/Symbol.png'

const Oursevices = () => {

    useState

    return (
        <>
            <h1 className='text-[#FCE383] font-bold text-[115px] font-clashDisplay m-3 mt-20'> Our
                <span className='font-clashDisplay text-white'> Services</span></h1>

            <hr className='mt-5 mb-5' />

            <div className='flex gap-10 w-full m-10 flex-wrap'>
                {data.map((val, k) => {
                    return <>
                        <SerRow data={val} />
                    </>
                })}
            </div>
        </>
    )
}

export default Oursevices