import React from 'react'
import { getText } from '../locales'

const Tovar4 = () => {
    return (
       <>
         <div className='Tovar Tovar4'>
            <div className="container">
                <div className="row justify-content-center  flex-lg-row flex-column">
                    <div className="col-lg-5 text-center">
                        <div className="img">
                            <img className='w-100' src="./img/tovar4.jpg" alt="" />
                        </div>
                        <div className="btn-request">
                            <a href="https://t.me/Sila_sveta_uz">{getText("requestBtn")}</a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="info">
                            <h2 className="blog-title">{getText("tovarT3")}</h2>
                            <p>{getText("tovar4p1")}</p>

                            <p>{getText("tovar4p2")}</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
       </>
    )
}

export default Tovar4