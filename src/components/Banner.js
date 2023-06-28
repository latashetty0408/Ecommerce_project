import React from 'react'

export default function Banner() {
  return (
    <>
        <section className="img_1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="banner-product-single-item">
                            <div className="img_banner">
                                <img src="https://htmldemo.net/tuime/tuime/assets/img/shop/banner/1.webp" alt="Dog_Banner" height="100%" width="100%"/>
                            </div>
                            <div className="content">
                                <h5 className="sub-title">50% Off</h5>
                                <h5 className="title">Dog Food</h5>
                                <a className="btn-theme btn-theme-color" href="/">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="banner-product-single-item">
                            <div className="img_banner">
                                <img src="https://htmldemo.net/tuime/tuime/assets/img/shop/banner/2.webp" alt="Cat_Banner" height="100%" width="100%"/>
                            </div>
                            <div className="content">
                                <h5 className="sub-title">50% Off</h5>
                                <h5 className="title">cat Food</h5>
                                <a className="btn-theme btn-theme-color" href="/">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
