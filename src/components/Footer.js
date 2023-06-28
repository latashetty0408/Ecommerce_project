import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="about">
                                <h4>About Us</h4><br/>
                                <p className="desc">
                                    Lorem ipsum dolor sit amet, consectel
                                    adipisicing elit, sed do eiusmod temp
                                    incidid ut
                                    labore et dolo
                                </p>

                                <div className="social-icons">
                                    <a href='/'><i className='fa fa-facebook-square'></i></a>
                                    <a href='/'><i className='fa fa-pinterest-square'></i></a>
                                    <a href='/'><i className='fa fa-dribbble'></i></a>
                                    <a href='/'><i className="fa fa-twitter-square"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="information">
                                <h4>Information</h4><br/>
                                <div className="links">
                                    <ul className="list">
                                        <li><a href='/'>About Us</a></li>
                                        <li><a href='/'>Delivery Information</a></li>
                                        <li><a href='/'>Privacy Policy </a></li>
                                        <li><a href='/'>Terms & Conditions</a></li>
                                        <li><a href='/'>Contact Us</a></li>
                                        <li><a href='/'>Loag In Info</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="information">
                                <h4>Our Policy</h4><br/>
                                <div className="links">
                                    <ul className="list">
                                        <li><a href='/'>Gallery</a></li>
                                        <li><a href='/'>Brands</a></li>
                                        <li><a href='/'>Gift Certificates</a></li>
                                        <li><a href='/'>Specials</a></li>
                                        <li> <a href='/'> My Account Us</a></li>
                                        <li> <a href='/'>About Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="contact links">
                                <h4>Contact Info:</h4><br/>
                                <div>
                                    <p>If you have any question.please contact
                                        us at <br/>
                                        <a style={{color: '#ffd868'}} href="/">demo@example.com</a>
                                    </p>

                                    <div className="contact-item">
                                        <div className="icon"><i className="fa
                                                fa-map-marker"></i></div>
                                        <div className="info">
                                            <p>Your address goes here.<br/>
                                                123, Address.</p>
                                        </div>
                                    </div>
                                    <div className="contact-item-phone">
                                        <div className="icon">
                                            <i className="fa fa-mobile-phone"></i>
                                        </div>
                                        <div className="info">
                                            <p>
                                                <span style={{color: '#ffd868'}}>Have
                                                    any Question</span>
                                                <br/>
                                                <a href="/">+0 123 456 789</a>
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="footer-bottom">
                <div className="container pt--0 pb--0">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-bottom-content">
                                <p className="copyright">© 2021 Tuime. Made with <i
                                        className="fa fa-heart"></i> by <a
                                        target="_blank"
                                        href="/https://themeforest.net/user/codecarnival">Codecarnival.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
