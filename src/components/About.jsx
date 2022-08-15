import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const About = () => {
    return (
        <div className='About'>
            <div className="container">
                <div className="row justify-content-center flex-lg-row flex-column-reverse">
                    <div className="col-lg-5">
                        <div className="info text-lg-start text-center">
                            <h2 className='blog-title'>{getText("about")}</h2>
                            <p>{getText("aboutus")}</p>
                            <div className="myBtn">
                                <Link to="/about">{getText("more")}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="img">
                            <img className='w-100' src="./img/about.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About