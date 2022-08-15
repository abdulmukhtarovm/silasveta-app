import React from 'react'
import { getText } from '../locales'

const Tovar5 = () => {
    return (
        <>
            <div className='Tovar Tovar5'>
            <div className="container">
                <div className="row justify-content-center  flex-lg-row flex-column-reverse">
                    <div className="col-lg-5">
                        <div className="info">
                            <h2 className="blog-title">{getText("tovarT4")}</h2>
                            <p>{getText("tovar5p1")}</p>

                            <p>{getText("tovar5p2")}</p>

                            <p>{getText("tovar5p3")}</p>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center">
                        <div className="img">
                            <img className='w-100' src="./img/tovar5.jpg" alt="" />
                        </div>
            
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Tovar5