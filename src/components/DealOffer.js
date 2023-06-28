import React from 'react'

export default function DealOffer() {
  return (
    <div>
       <section className="deal_offer">
            <div className="container-fluid">
                <div className="row divider-style1">
                    <div className="col-lg-4 ">
                        <div className="divider-thumb">
                            <img
                                src="https://htmldemo.net/tuime/tuime/assets/img/photos/divider1.webp"
                                className="w-100" width="230"
                                height="300" alt="Image-HasTech"/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="divider-content text-center">
                            <h5 className="sub-title">Save 50% Off</h5>
                            <h2 className="title">Best Deal Offer</h2>
                            <p className="desc">Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit, sed do eiusmod
                                tempor
                                incididunt ut labore etlop.</p>
                            <a className="btn btn-warning button text-center"
                                href="/">Shop Now</a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="divider-thumb divider-thumb-right">
                            <img
                                src="https://htmldemo.net/tuime/tuime/assets/img/photos/divider2.webp"
                                className="w-100" width="230"
                                height="300" alt="Image-HasTech"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
