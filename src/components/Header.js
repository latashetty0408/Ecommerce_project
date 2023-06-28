import React from 'react'

export default function Header() {
    
  return (
    <div>
      <section>
            <div className="container-fluid con">
                <div className="row">
                    <div className="col-md-6">
                        <div className="head-content">
                            <h3 className="TITLE">UP TO 40% OFF</h3><br/>
                            <h1>
                                <b>
                                    A GREAT MEAL<br/>
                                    WITH YOUR PET
                                </b>
                            </h1><br/>
                            <button className="btn  head-button  btn-warning">SHOP NOW</button> 
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="https://htmldemo.net/tuime/tuime/assets/img/slider/slider-01.webp"
                            className="w-100" id="Dog_img" alt='img'/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
