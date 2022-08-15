import React from 'react'
import { getText } from '../locales'

const Header = () => {
  return (
    <div className='Header'>
        <div className="blur"></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-8" style={{zIndex: '3'}}>
                    <div className="info">
                        <h1>{getText("headerT")}</h1>
                        <div className="myBtn">
                            <a href="https://t.me/Sila_sveta_uz">{getText("svyaz")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header