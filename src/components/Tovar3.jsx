import React from 'react'
import { getText } from '../locales'

const Tovar3 = () => {
    return (
       <>
         <div className='Tovar Tovar3'>
            <div className="container">
                <div className="row justify-content-center  flex-lg-row flex-column-reverse">
                    <div className="col-lg-5">
                    <div className="info">
                                <h2 className="blog-title">{getText("tovarT2")}</h2>
                                <p>{getText("tovar3p1")}</p>

                                <p>{getText("tovar3p2")}</p>

                                <p>{getText("tovar3p3")}</p>
                            </div>
                    </div>
                    <div className="col-lg-5 text-center">
                        <div className="img">
                            <img className='w-100' src="./img/tovar3.jpg" alt="" />
                        </div>
                        <div className="btn-request">
                            <a href="https://t.me/Sila_sveta_uz">{getText("requestBtn")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default Tovar3