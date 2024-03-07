import React from 'react'

const Marquee = () => {
    return (
        <>
            <div className="elem" style={{ transform: "rotate(0deg)", marginBottom: "400px" }}>
                <div className="moving" style={{ backgroundColor: "#FCE383" }}>
                    <div className="move-in">
                        <h5 style={{ fontSize: "60px" }}> LETS CONNECT </h5>
                        <h5 style={{ fontSize: "60px" }}> GET STARTED </h5>
                    </div>

                    <div className="move-in">
                        <h5 style={{ fontSize: "60px" }}>LETS CONNECT</h5>
                        <h5 style={{ fontSize: "60px" }}> GET STARTED </h5>
                    </div>

                    <div className="move-in">
                        <h5 style={{ fontSize: "60px" }}>LETS CONNECT</h5>
                        <h5 style={{ fontSize: "60px" }}> GET STARTED </h5>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Marquee
