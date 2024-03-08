import React from 'react'
import symbol from '../../assets/images/Symbol.png'

const ContactForm = () => {
    return (
        <div className='flex m-5 items-center justify-between w-[100%]'>



            <div className='w-[65%]'>

                <div className='flex-row w-full'>
                    <p className='text-white font-medium mb-2'>I am</p>
                    <input type="text" placeholder='Your Name' className='pl-2 bg-[#060606] border-b-[1px] p-2 font-medium text-white text-lg' style={{ width: '80%' }} />
                </div>

                <div className='flex mt-7 w-[80%]'>

                    <div className='w-[50%] mr-10'>
                        <p className='text-white font-medium mb-2'>Your Company Name *</p>
                        <input className='pl-2 bg-[#060606] border-b-[1px] p-2 font-medium text-white text-lg' style={{ width: '100%' }} placeholder='Your Name' type="text" />
                    </div>

                    <div className='w-[50%]'>
                        <p className='text-white font-medium mb-2'>Your Email Address *</p>
                        <input className='pl-2 bg-[#060606] border-b-[1px] p-2 font-medium text-white text-lg' style={{ width: '100%' }} placeholder='Your Name' type="text" />
                    </div>
                </div>

                <div className='flex mt-7 w-[80%]'>

                    <div className='w-[50%] mr-10'>
                        <p className='text-white font-medium mb-2'>My Budget range*</p>
                        {/* <input type="text" placeholder='Your Name' className='pl-2 bg-[#060606] border-b-[1px] p-2 font-medium text-white text-lg' style={{ width: '80%' }} /> */}
                        <select className='bg-[#000] border-b-[1px] p-2 font-medium text-white text-lg' style={{ width: '100%' }}>
                            <option value="">{">$10000"}</option>
                            <option value="">{"$10,000 - $20,000"}</option>
                            <option value="">{"$20,000 - $50,000"}</option>
                            <option value="">{"$50,000 - $100,000"}</option>
                            <option value="">{"$30,000 - $500,000"}</option>
                            <option value="">{"$50,000 - $1000,000"}</option>
                            <option value="">{"$1000,000+"}</option>

                        </select>
                    </div>

                    <div className='w-[50%]'>
                        <p className='text-white font-medium mb-2'>From Where Did You Here About Us *</p>
                        {/* <input type="text" placeholder='Your Name' className='pl-2 bg-[#060606] border-b-[1px] p-2 font-medium text-white text-lg' style={{ width: '80%' }} /> */}
                        <select className='bg-[#000] border-b-[1px] p-2 font-medium text-white text-lg' style={{ width: '100%' }}>
                            <option value="">{"Google"}</option>
                            <option value="">{"Bing"}</option>
                            <option value="">{"Dribble"}</option>
                            <option value="">{"Behance"}</option>
                            <option value="">{"Clutch"}</option>
                            <option value="">{"Instagram"}</option>
                            <option value="">{"Twitter"}</option>
                            <option value="">{"Linkedin"}</option>
                            <option value="">{"Facebook"}</option>
                            <option value="">{"Youtube"}</option>
                            <option value="">{"TikTok"}</option>
                            <option value="">{"Others"}</option>
                        </select>
                    </div>




                </div>

                <div className='flex-row w-full mt-8'>
                    <p className='text-white font-medium mb-2'>Bring Your Thoughts Here *</p>
                    <input type="text" placeholder='Tell us more about your idea' className='pl-2 bg-[#060606] border-b-[1px] p-2 font-medium text-white text-lg' style={{ width: '80%' }} />
                </div>

                <div className="cursor-color mt-12 bg-[#FCE383] flex max-w-[200px] p-4 text-[15px] mb-8 cursor-pointer hover:bg-[#b8a660]">
                    <p className='text-black font-bold'>SEND INQUIRY</p>
                    <img className='w-[25px] ml-5' src={symbol} alt="" />
                </div>
            </div>

            <div className='w-[35%]'>
                <p className='text-[14px] text-[#6f6f74] font-semibold my-10'>CONTACT DETAILS</p>
                <a href="" className='text-white text-[24px] font-semibold'>sales@artwingalpha.com</a>
                <p className='text-[14px] text-[#6f6f74] font-semibold my-10'>ARTWING ALPHA COMPANY DECK</p>
                <a href="" className='text-white text-[24px] font-semibold'>Download</a>
                <p className='text-[14px] text-[#6f6f74] font-semibold my-10'>WANT TO JOIN ALPHA TEAM? EMAIL US AT:</p>
                <a href="" className='text-white text-[24px] font-semibold'>hr@artwingalpha.com</a>
            </div>

        </div >

    )
}

export default ContactForm