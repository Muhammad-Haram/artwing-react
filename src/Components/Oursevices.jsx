import React from 'react'
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

    const data = [
        {
            icon: icwebDe,
            categories: "Website UI/UX",
            categories2: "& Development",
            para: `At the heart of our design and development philosophy lies the art of crafting immersive digital experiences We breathe life into websites with the latest UX/UI strategies making each interaction intuitive and engaging
            We don't just build websites we create digital masterpieces that resonate with your brand's essence Your story deserves to be told and we ensure it's shared in a unique and compelling way Our custom websites are tailor-made to fit your brand's precise specifications engaging users converting sales and generating leads`,
            point1: `Creative Website Design`,
            point2: `Responsive Web Development`,
            point3: `Interactive User Experience`,
            point4: `Content Management Systems (CMS)`,
            point5: `Custom Functionality Development`,
            rightBanner: devopimg
        },
        {
            icon: icwebDe,
            categories: "AI / ML",
            categories2: "Solution",
            para: `At the heart of our design and development philosophy lies the art of crafting immersive digital experiences We breathe life into websites with the latest UX/UI strategies making each interaction intuitive and engaging
            We don't just build websites we create digital masterpieces that resonate with your brand's essence Your story deserves to be told and we ensure it's shared in a unique and compelling way Our custom websites are tailor-made to fit your brand's precise specifications engaging users converting sales and generating leads`,
            point1: `Creative Website Design`,
            point2: `Responsive Web Development`,
            point3: `Interactive User Experience`,
            point4: `Content Management Systems (CMS)`,
            point5: `Custom Functionality Development`,
            rightBanner: Ai
        },
        {
            icon: icwebDe,
            categories: "Website UI/UX",
            categories2: "& Development",
            para: `At the heart of our design and development philosophy lies the art of crafting immersive digital experiences We breathe life into websites with the latest UX/UI strategies making each interaction intuitive and engaging
            We don't just build websites we create digital masterpieces that resonate with your brand's essence Your story deserves to be told and we ensure it's shared in a unique and compelling way Our custom websites are tailor-made to fit your brand's precise specifications engaging users converting sales and generating leads`,
            point1: `Creative Website Design`,
            point2: `Responsive Web Development`,
            point3: `Interactive User Experience`,
            point4: `Content Management Systems (CMS)`,
            point5: `Custom Functionality Development`,
            rightBanner: Ai
        }
    ]

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