import React from 'react'

export default function AboutArea() {
  return (
    <div>
      <section className="about-area">
            <div className="container">
                <div className="about-item position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 order-2 order-lg-1">
                            <div className="about-content">
                                <div className="section-title shape-left">
                                    <h5 className="sub-title">Best PRODUCT</h5>
                                    <h2 className="title">Best Pet Food</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incidid
                                    ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate</p>
                                <p>Velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidata
                                    non
                                    proident, sunt in culpa qui officia deserun
                                    mollit anim id est laborum. Sed ut
                                    perspiciatis unde omnis iste natus error.</p>
                                <a className="btn-theme" href="/">Shop Now</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 order-1 order-lg-2">
                            <div className="about-thumb">
                                <img
                                    src="https://htmldemo.net/tuime/tuime/assets/img/about/1.webp"
                                    className="w-100" width="70%" height="70%"
                                    alt="background"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
