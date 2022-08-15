import React from 'react'
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getText } from '../locales'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="row justify-content-around align-items-center">
                    <div className="col-md-2 col-sm-6">
                        <div className="address">
                            <h6>{getText("address")}</h6>
                            <p>{getText("addres")}</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="logo">
                            <a href="/">
                                <img className='w-100' src="./img/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="social">
                            <a href="https://www.facebook.com/silasveta.uz/"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://www.instagram.com/silasveta_uz/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://t.me/Sila_sveta_uz"><FontAwesomeIcon icon={faTelegramPlane} /></a>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="call">
                        <h6>{getText("contacts")}</h6>
                            <a href="tel:+998977711183">+998 (97) 771 11 83</a> <br />
                            <a href="tel:+998903708839">+998 (90) 370 88 39</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © 2022 Sila Sveta | Created by <a href="https://kokoagency.uz/" target="blank">kOkO digital agency</a></p>
            </div>
        </div>
    )
}

export default Footer