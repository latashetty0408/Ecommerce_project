import React from 'react'
import { Link } from 'react-router-dom'
     
export default function AboutUs() {
  return (
    <div>
        <main>
        <div className="page-header-area"
                style={{backgroundImage: 'url(https://htmldemo.net/tuime/tuime/assets/img/photos/bg1.webp)'}}>
                <div className="container pt-0 pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-header-content">
                                <h2 className="title" style={{fontSize: '48px', margin: '0 0 5px 14px'}}>About Us</h2>
                                <nav className="breadcrumb-area">
                                    <ul className="breadcrumb"
                                        style={{backgroundColor: 'transparent'}}>
                                        <li className="breadcrumb-li"><Link to="/" style={{color: '#0b0b0b'}}>Home</Link></li>
                                        <li className="breadcrumb-li breadcrumb-sep">||</li>
                                        <li className="breadcrumb-li" style={{color: '#721b65'}}>About Us</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
