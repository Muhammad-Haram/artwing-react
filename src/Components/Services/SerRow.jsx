import React from 'react'
import icBrand from '../../assets/images/services/brand-img.png'
import icEcommerce from '../../assets/images/services/ecommerce.jpg'
import icPerform from '../../assets/images/services/performance.png'
import icPitch from '../../assets/images/services/pitch-icon.jpg'
import icSeo from '../../assets/images/services/seo-icon.jpg'
import icSoacialIcon from '../../assets/images/services/social-icon.jpg'
import icwebDe from '../../assets/images/services/web-design.jpg'
import devopimg from '../../assets/images/services/devop-2.png'
import Marketimg from '../../assets/images/services/d-market-1.png'
import ecomImg from '../../assets/images/services/e-commerce.png'
import Ai from '../../assets/images/services/image-ai.jpg'
import pitchImg from '../../assets/images/services/pitch-2.jpg'
import sImg from '../../assets/images/services/seinys.jpg'
import seoImg from '../../assets/images/services/seo-1.jpg'
import Social from '../../assets/images/services/social-2.jpg'
import symbol from '../../assets/images/Symbol.png'



const SerRow = ({ data }) => {
    return (
        <>
            <div style={{ overflow: 'scroll', overflowX: 'hidden' }} className='text-white bg-[#1c1c1c] w-[45%] h-[115vh] p-5 px-7'>
                <img className='m-0 w-24 bg-[#FCE383] p-6 rounded-2xl mb-5' src={data.icon} alt="" />
                <h2 className='text-[30px] font-bold mt-3'>{data.categories}</h2>
                <h2 className='text-[30px] font-bold mb-5'>{data.categories2}</h2>
                <p className='text-[20px] text-[#c6c6c6] mb-5'>{data.para}</p>

                <div className='my-8'>
                    <div className='flex gap-3 mb-3'>
                        <i className="fa-solid fa-check text-xl text-[#c6c6c6]"></i>
                        <p className='text-[20px] text-[#c6c6c6]'>{data.point1}</p>
                    </div>

                    <div className='flex gap-3 mb-3'>
                        <i className="fa-solid fa-check text-xl text-[#c6c6c6]"></i>
                        <p className='text-[20px] text-[#c6c6c6]'>{data.point2}</p>
                    </div>

                    <div className='flex gap-3 mb-3'>
                        <i className="fa-solid fa-check text-xl text-[#c6c6c6]"></i>
                        <p className='text-[20px] text-[#c6c6c6]'>{data.point3}</p>
                    </div>

                    <div className='flex gap-3 mb-3'>
                        <i className="fa-solid fa-check text-xl text-[#c6c6c6]"></i>
                        <p className='text-[20px] text-[#c6c6c6]'>{data.point4}</p>
                    </div>

                    <div className='flex gap-3 mb-3'>
                        <i className="fa-solid fa-check text-xl text-[#c6c6c6]"></i>
                        <p className='text-[20px] text-[#c6c6c6]'>{data.point5}</p>
                    </div>
                </div>

                <div className='m-5'>
                    <div className="cursor-color bg-[#FCE383] flex max-w-[300px] p-4 text-[15px] mb-8 cursor-pointer hover:bg-[#b8a660]">
                        <p className='text-black font-bold'>GET A CUSTOMIZE QUOTE</p>
                        <img className='w-[30px] ml-5' src={symbol} alt="" />
                    </div>

                    <div className="cursor-color bg-[#FCE383] max-w-[200px] flex items-center justify-center p-4 text-[15px] mb-8 cursor-pointer hover:bg-[#b8a660]">
                        <p className='text-black font-bold'>VIEW PORTFOLIO</p>
                    </div>
                </div>

            </div>

            <div className='w-[45%]'>
                <img src={data.rightBanner} alt="" />
            </div>
        </>
    )
}

export default SerRow