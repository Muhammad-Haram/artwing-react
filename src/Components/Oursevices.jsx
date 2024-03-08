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
            para: `Enter the world of AI/MIL with our visionary solutions. We don't just follow the latest trends; we set them.
            Through innovation and cutting-edge technology, we transform your AI and machine learning concepts into living realities. Our dedicated team of experts crafts AI algorithms, seamlessly integrates machine learning, conducts meticulous data analysis, and develops bespoke AI solutions to meet your unique needs.`,
            point1: `Generative AI`,
            point2: `Chatbots`,
            point3: `Digital Assistants`,
            point4: `Recommendation Systems`,
            point5: `AI Ethics and Responsible AI`,
            rightBanner: Ai
        },
        {
            icon: icEcommerce,
            categories: "E-Commerce",
            categories2: "Development",
            para: `Experience e-commerce like never before with our services. We're here to elevate your online retail game, boosting both sales and customer engagement.
            Our online store designs are crafted to captivate, and we integrate payment gateways with precision. The management of product catalogs becomes a breeze, and we're relentless in optimizing conversions. Your e-commerce journey will be nothing short of remarkable.`,
            point1: `Custom E-Commerce Solutions`,
            point2: `Mobile-First E-commerce`,
            point3: `Easy Content Management Solutions`,
            point4: `Secure Payment Gateways`,
            point5: `User-Centric Design`,
            rightBanner: ecomImg
        },
        {
            icon: icPerform,
            categories: "Digital Marketing",
            categories2: "(Lead Gen & PPC)",
            para: `Prepare to embark on a digital success journey with our lead generation and PPC advertising expertise. We take the helm of your digital campaigns, steering them towards resounding success.
            Our lead generation strategies are finely tuned to bring in quality leads, and our PPC campaigns are optimized for maximum impact. We meticulously manage ad campaigns, ensuring they resonate with your audience. Conversion tracking becomes a strategic art. Be ready to witness the power of digital.`,
            point1: `Targeted Lead Generation`,
            point2: `Comprehensive PPC Management`,
            point3: `High-Converting Landing Pages`,
            point4: `Social Media Lead Magnet`,
            point5: `Email Marketing Automation`,
            rightBanner: Marketimg
        },

        {
            icon: icBrand,
            categories: "Brand Identity",
            categories2: "& Consultation",
            para: `Your brand has a unique story, and we're here to help you tell it in a way that captivates the world. Our brand identity and consultation services are a creative journey.
            We kick-start the process with immersive workshops, in-depth research, and insightful interviews with external stakeholders, current clients, and board members. This isn't just brand building; it's brand coalescing. Together, we create a brand identity that will have everyone buzzing.`,
            point1: `Brand Discovery Workshops`,
            point2: `Market Research and Analysis`,
            point3: `Logo and Visual Identity`,
            point4: `Brand Messaging and Communication`,
            point5: `Brand Guidelines Development`,
            rightBanner: sImg
        },
        {
            icon: icSeo,
            categories: "Search Engine",
            categories2: "Optimization",
            para: `Unlock the secrets of digital discoverability and soar in search engine rankings. Our SEO services are more than just algorithms; they're an art form.
            On-page and off-page optimization become our canvas, and keyword analysis is our paintbrush. With SEO audits and reports, we meticulously refine your online presence. Our goal? To help your brand shine brightly in the digital sky.`,
            point1: `Comprehensive SEO Audits`,
            point2: `Keyword Research and Strategy`,
            point3: `On-Page SEO Optimization`,
            point4: `Off-Page SEO and Link Building`,
            point5: `Local SEO Optimization`,
            rightBanner: seoImg
        },
        {
            icon: icPitch,
            categories: "Business Proposal",
            categories2: "& Pitch Decks",
            para: `Step into the world of persuasive proposals and pitch decks, where business success is an art form. We craft proposals that are not just words on paper but a symphony of persuasion.
            Visual design is our creative palette, and pitch deck creation is our masterpiece. Content optimization is our secret sauce, making your proposals and decks irresistible. Get ready to pitch your way to triumph.`,
            point1: `Tailored Business Proposals`,
            point2: `Compelling Pitch Deck Design`,
            point3: `Market Research and Competitive Analysis`,
            point4: `Financial Projections and ROI Analysis`,
            point5: `Business Model Optimization`,
            rightBanner: pitchImg
        },
        {
            icon: icSoacialIcon,
            categories: "Social Media",
            categories2: "Marketing",
            para: `In the realm of social media, we're the storytellers. Our social media marketing services are about crafting stories that connect and engage your audience.
            We don't just follow trends; we set them. With a strategic approach to social media, content creation that sparks intrigue, and paid advertising campaigns that captivate, we ensure that your brand's social media presence becomes legendary. Dive into the world of social media storytelling with us.`,
            point1: `Social Media Strategy Development`,
            point2: `Content Creation and Curation`,
            point3: `Community Engagement and Management`,
            point4: `Social Advertising Campaigns`,
            point5: `Campaign Analytics and Reporting`,
            rightBanner: Social
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