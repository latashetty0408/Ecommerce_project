import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light py-4">
            <div className="container-fluid">
                <a className="navbar-brand d-flex justify-content-between
                    align-items-center order-lg-0" href="/">
                    <img src="https://htmldemo.net/tuime/tuime/assets/img/logo-light.webp" alt="site icon"/>
                </a>
                

                <div className="order-lg-4 nav-btns icons">
                    <button type="button" className="btn position-relative">
                        <Link to='/'><i className='fa fa-search'></i></Link>
                    </button>
                    <button type="button" className="btn position-relative">
                        <Link to='/login'><i className='fa fa-users'></i></Link>
                    </button>
                    <button type="button" className="btn position-relative">
                        <Link to='/shop_wishlist'><i className='fa fa-heart-o'></i></Link>
                    </button>
                    <button type="button" className="btn position-relative">
                        <Link to="/add_to_cart">
                            <i className='fa fa-shopping-cart'></i></Link>
                        <span className="position-absolute top-0 start-100
                            translate-middle badge">4</span>
                    </button>
                </div>

                <button className="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse order-lg-1 nav_nav" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto text-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">SHOP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">BLOG</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
