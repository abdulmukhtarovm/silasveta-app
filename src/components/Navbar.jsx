import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { getLanguage, getText } from '../locales/index'
import { LANGUAGE } from '../tools/constants';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [burger, setBurger] = useState(false)

    const changeNavbar = () => {

        if (window.scrollY >= 30) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);

    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        document.location.reload(true)
    }

    return (
        <>
            <div className={`Navbar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row justify-content-around align-items-center">
                        <div className="col-md-3 col-6">
                            <div className="logo">
                                <a href="/">
                                    <img className='w-100' src="./img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className={`col-9 mobileWrap ${burger ? '' : 'burgered'}`}>
                            <div className="navBar-menu d-flex justify-content-end align-items-center">
                                <ul className="nav-menu">
                                    <li><Link to="/">{getText("home")}</Link></li>
                                    <li><Link to="/about">{getText("about")}</Link></li>
                                    <li><Link to="/contacts">{getText("contacts")}</Link></li>
                                </ul>
                                <div className="social">
                                    <a href="https://www.facebook.com/silasveta.uz/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href="https://www.instagram.com/silasveta_uz/"><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href="https://t.me/Sila_sveta_uz"><FontAwesomeIcon icon={faTelegramPlane} /></a>
                                </div>
                                <div className="call">
                                    <a href="tel:+998977711183">+998 (97) 771 11 83</a>
                                    <a href="tel:+998903708839">+998 (90) 370 88 39</a>
                                </div>
                                <select className='siteLang' onChange={changeLanguage}>
                                    <option value="ru" selected={getLanguage() === "ru"} >Ру</option>
                                    <option value="uz" selected={getLanguage() === "uz"} >Uz</option>
                                </select>
                            </div>
                        </div>

                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger1"></div>
                            <div className="burger2"></div>
                            <div className="burger3"></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="navbarLine"></div>
        </>
    )
}

export default Navbar