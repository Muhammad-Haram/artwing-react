import React from 'react'
import design from '../../assets/images/Design.png'
import discover from '../../assets/images/Discover.png'
import implementation from '../../assets/images/Implementation.png'
import project from '../../assets/images/Project-kickoff.png'

const Work = () => {
    return (
        <>
            <div className='flex items-center justify-between m-10'>
                <h1 className='text-[30px] font-bold sm:text-[64px] text-white w-1/1'>How <br /> <span className='text-[#FCE383]'> We Work</span></h1>
                <p className='text-[20px] leading-5 text-[#6e6e6e] w-1/2'>From creative project kickoffs to research-driven design and the grand unveiling, our journey is a continuous process of excellence. We refine projects perpetually, like fine wine maturing with time.</p>
            </div>

            <div className='work-conatiner' style={{ margin: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <div className='work-box' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px', marginTop: '40px', marginBottom: '140px', border: '1px solid #fff', width: '25%' }}>
                    <img className='w-1/2' src={project} alt="" />
                    <p className='text-white font-semibold text-lg text-center mt-10'>Project kickoff</p>
                </div>

                <div className='work-box' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px', marginTop: '40px', marginBottom: '140px', border: '1px solid #fff', width: '25%' }}>
                    <img className='w-1/2' src={discover} alt="" />
                    <p className='text-white font-semibold text-lg text-center mt-10'>Implementation</p>
                </div>

                <div className='work-box' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px', marginTop: '40px', marginBottom: '140px', border: '1px solid #fff', width: '25%' }}>
                    <img className='w-1/2' src={design} alt="" />
                    <p className='text-white font-semibold text-lg text-center mt-10'>The Grand Unveiling</p>
                </div>

                <div className='work-box' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '50px', marginTop: '40px', marginBottom: '140px', border: '1px solid #fff', width: '25%' }}>
                    <img className='w-1/2' src={implementation} alt="" />
                    <p className='text-white font-semibold text-lg text-center mt-10'>Eternal Refinement</p>
                </div>
            </div>
        </>
    )
}

export default Work 