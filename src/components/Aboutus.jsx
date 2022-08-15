import React from 'react'
import { getText } from '../locales'

const Aboutus = () => {
    return (
        <div className='Aboutus'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="text">
                            <p>
                              {getText("aboutp1")}
                            </p>
                            <p>
                              {getText("aboutp2")}
                            </p>
                            <p>
                              {getText("aboutp3")}
                            </p>
                            <p>
                              {getText("aboutp4")}
                            </p>
                            <p>
                              {getText("aboutp5")}
                            </p>
                            <p>
                              {getText("aboutp6")}
                            </p>
                            <p>
                              {getText("aboutp7")}
                            </p>
                            <p>
                              {getText("aboutp8")}
                            </p>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4 mb-3 img">
                                <img className='w-100' src="./img/about1.jpg" alt="" />
                            </div>
                            <div className="col-md-4 mb-3 img">
                                <img className='w-100' src="./img/about2.jpg" alt="" />
                            </div>
                            <div className="col-md-4 mb-3 img">
                                <img className='w-100' src="./img/about3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus