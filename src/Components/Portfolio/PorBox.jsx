import React from 'react'


const PorBox = ({ data }) => {
    return (
        <>

            <div className="por-img">
                <img className="cursor-color flex" src={data.img} alt="" />
                <p style={{ marginTop: '50px' }} className="cursor-color">{data.categories}</p>
                <h2 style={{ margin: 0 }} >{data.prName}</h2>
                <h2 className='mt-0 pt-0'>{data.prName2}</h2>
            </div>

        </>
    )
}

export default PorBox