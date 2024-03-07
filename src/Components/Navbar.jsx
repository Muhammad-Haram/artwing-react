import React from 'react'
import { useState } from 'react';
import logo from "../assets/images/alpha-logo.jpg"
import toggle from "../assets/images/toggle-btn.png"
import close from "../assets/images/close.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [Onmenu, setOnmenu] = useState(false);

    return (
        <>

            <section id="header" className={Onmenu ? "show" : ""}>
                <div className="nav">
                    <div className="logo">
                        <img className="cursor-color" src={logo} alt="" />
                    </div>
                    <div className="menu bar">
                        <img className=" cursor-color" src={toggle} alt="" onClick={() => {
                            setOnmenu(!Onmenu)
                            console.log(Onmenu)
                        }} />
                    </div>
                </div>
            </section>

            <section className={Onmenu ? "show nav-info" : " nav-info"}>
                <div className="nav-close">
                    <div className="logo">
                        <img className="cursor-color" src={logo} alt="" />
                    </div>
                    <div className="menu">
                        <img className="cursor-color close" src={close} alt="" onClick={() => {
                            setOnmenu(!Onmenu)
                            console.log(Onmenu)
                        }} />
                    </div>
                </div>

                <div className="nav-content">
                    <div className="nav-list">
                        <h2 className="cursor-color">
                            <Link to="/" onClick={() => {
                                setOnmenu(false);
                            }}>Home</Link>
                        </h2>
                        <h2 className="text-color cursor-color">
                            <Link to="/Aboutmain" onClick={() => {
                                setOnmenu(false);
                            }}>About Us</Link>
                        </h2>
                        <h2 className="cursor-color">
                            <Link to="/OurServices" onClick={() => {
                                setOnmenu(false);
                            }}>Our Services</Link>
                        </h2>
                        <h2 className="text-color cursor-color">
                            <Link to="/Ourportfolio" onClick={() => {
                                setOnmenu(false);
                            }}>Portfolio</Link>
                        </h2>
                        <h2 className="cursor-color">
                            <Link to="/Ourcontact" onClick={() => {
                                setOnmenu(false);
                            }}>Contact Us</Link>
                        </h2>
                    </div>
                    <div className="nav-contact">
                        <div className="address">
                            <h3>Address</h3>
                            <p><span>UK:</span> Unit 57 D58 The Winning Box 27-37 Station Road
                                Hayes, UB34DX, Hillingdon London.</p>

                            <p><span>Canada:</span> 128 Evansdale Way Northwest, Calgary, AB</p>

                            <p><span>PK:</span> 128 Evansdale Way Northwest, Calgary, AB</p>

                            <p><span>UAE:</span> Arjan, Al Barsha South 3, Office#419, Diamond Business Centre 2,, Dubai, UAE,
                                AE
                            </p>
                        </div>
                        <div className="links">
                            <h3>Social</h3>
                            <ul>
                                <li><i className="fa-brands fa-facebook-f cursor-color"></i></li>
                                <li><i className="fa-brands fa-x-twitter cursor-color"></i></li>
                                <li><i className="fa-brands fa-linkedin-in cursor-color"></i></li>
                                <li><i className="fa-brands fa-instagram cursor-color"></i></li>
                            </ul>
                            <h3>Contact</h3>
                            <a className="cursor-color" href="mailto:haramh643@gmail.com">haramh643@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Navbar
