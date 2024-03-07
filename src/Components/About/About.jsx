import React from 'react'
import aboutval from '../../assets/images/alpha-img.png'

const About = () => {
    return (
        <>
            <section id="about-section" style={{ marginTop: '50px' }}>
                <div className="about-img" style={{ width: '50%' }}>
                    <img src={aboutval} alt="" />
                </div>
                <div className="about-content w-1/3">
                    <h1 style={{ fontSize: '20px' }}>WHY ARTWING ALPHA <br /> <span style={{ fontSize: '50px' }}>Our Values</span></h1>
                    <div className=''>
                        <div className='text-white font-semibold text-[20px] flex items-center justify-between border-[#9b9b9b] border-b-[2px] m-3 p-2'>
                            <h3 className=''>Transparent Communication</h3>
                            <h3 className='text-[40px] text-[#060606]' style={{ WebkitTextStroke: '1px #9b9b9b', letterSpacing: '2px' }}>01</h3>
                        </div>

                        <div className='text-white font-semibold text-[20px] flex items-center justify-between border-[#9b9b9b] border-b-[2px] m-3 p-2'>
                            <h3 className=''>Precision Management</h3>
                            <h3 className='text-[40px] text-[#060606]' style={{ WebkitTextStroke: '1px #9b9b9b', letterSpacing: '2px' }}>02</h3>
                        </div>

                        <div className='text-white font-semibold text-[20px] flex items-center justify-between border-[#9b9b9b] border-b-[2px] m-3 p-2'>
                            <h3 className=''>Pioneering Digital Possibilities</h3>
                            <h3 className='text-[40px] text-[#060606]' style={{ WebkitTextStroke: '1px #9b9b9b', letterSpacing: '2px' }}>03</h3>
                        </div>

                        <div className='text-white font-semibold text-[20px] flex items-center justify-between border-[#9b9b9b] border-b-[2px] m-3 p-2'>
                            <h3 className=''>Connecting ideas, Creating Success</h3>
                            <h3 className='text-[40px] text-[#060606]' style={{ WebkitTextStroke: '1px #9b9b9b', letterSpacing: '2px' }}>04</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
