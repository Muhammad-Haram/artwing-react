import React from 'react'
import ContactForm from './Contact/ContactForm'

const Ourcontact = () => {
    return (
        <>
            <div className='m-6 mt-16'>
                <p className='text-[20px] font-semibold text-white'>GET IN TOUCH</p>
                <h1 className='text-[70px] font-bold text-white'>Let's <span className='text-[#FCE383]'>make</span> your<br />
                    Customize Package</h1>
                <p className='text-[23px] text-[#39343c]'>If you would like to work with us or just want to get in touch,<br />
                    we’d love to hear from you!</p>
            </div>

            <ContactForm />
        </>
    )
}

export default Ourcontact