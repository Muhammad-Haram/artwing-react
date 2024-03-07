import React from 'react'
import symbol from '../../assets/images/Symbol.png'
import client from '../../assets/images/client-base.png'
import global from '../../assets/images/global-team (1).png'
import complete from '../../assets/images/completed-projects.png'

const Abouttext = () => {
    return (
        <>
            <div className='mx-40 my-10'>
                <h1 className='text-[#FCE383] font-bold text-[115px] font-clashDisplay m-3 mt-20'> About
                    <span className='font-clashDisplay text-white'> Agency</span></h1>

                <hr className='mt-5 mb-5' />

                <h1 className='text-white font-bold text-[65px] mb-7'>
                    Artwing Alpha, <span className='text-[#6e6e6e]'>where we unleash your</span> <span className='text-[#FCE383]'>digital potential</span>🚀
                </h1>

                <p className='text-[#c8c8c8] text-[20px] leading-7 mb-7'>At Artwing Alpha, we're not just another agency; we're your technology partner on a fast-growth journey. We offer bespoke services in AI & ML, web development, digital marketing, business consulting and more, tailored to meet the demands of a dynamic global market. Our boutique approach ensures every project is a masterpiece, setting us apart from the competition.</p>
                <p className='text-[#c8c8c8] text-[20px] leading-7 mb-7'>Our ‘Alphas’ are on a mission to redefine the technology landscape. We're not just keeping up with trends; we're setting new ones. From cutting edge solutions to unprecedented strategies, we bring a fresh perspective to every domain. Our customized approach ensures that you're not just a client but a collaborator in your digital success.</p>

                <div className="cursor-color bg-[#FCE383] flex max-w-[250px] p-4 text-[15px]">
                    <p className='text-black font-bold'>DISCOVER OUR WORKS</p>
                    <img className='w-[25px] ml-2' src={symbol} alt="" />
                </div>

                <div className='flex items-center justify-between gap-20 my-20'>
                    <img className='w-1/4' src={client} alt="" />
                    <img className='w-1/4' src={global} alt="" />
                    <img className='w-1/4' src={complete} alt="" />
                </div>

            </div>

        </>
    )
}

export default Abouttext