import React from 'react'
import { getText } from '../locales'

const Contact = () => {
    return (
        <div className='Contact'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <div className="wrap">
                                    <h6>{getText("address")}</h6>
                                    <p>{getText("addres")}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="wrap">
                                    <h6>{getText("telefon")}</h6>
                                    <a href="tel:+998977711183">+998 (97) 771 11 83</a> <br />
                                    <a href="tel:+998903708839">+998 (90) 370 88 39</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="wrap">
                                    <h6>{getText("grafik")}</h6>
                                    <p>{getText("gr1")} c 9:00-18:00</p>
                                    <p>{getText("gr2")} 9:00-18:00</p>
                                    <p>{getText("gr3")}  9:00-18:00</p>

                                </div>
                            </div>
                            <div className="col-md-4 col-8">
                                <div className="myBtn">
                                    <a href="https://t.me/Sila_sveta_uz">{getText("svyaz")}</a>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="map">
                                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=tashkent%20%2C%201-%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B5%D0%B7%D0%B4%20%D0%91%D0%BE%D0%B4%D0%BE%D0%BC%D0%B7%D0%BE%D1%80%20%D0%99%D1%83%D0%BB%D0%B8%2085&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near" title="tashkent , 1-й проезд Бодомзор Йули 85" aria-label="tashkent , 1-й проезд Бодомзор Йули 85"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact