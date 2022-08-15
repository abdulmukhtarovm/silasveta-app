import React from 'react'
import { getText } from '../locales'

const AboutusHeader = () => {
  return (
    <div className='Header1'>
        <div className="blur"></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8" style={{zIndex: '3'}}>
                    <div className="info">
                        <h1>{getText("about")}</h1>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutusHeader