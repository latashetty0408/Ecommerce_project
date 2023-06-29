import React, { useEffect, useRef, useState } from 'react'

export default function CollectionAllTypes() {
    
    const [showProduct, setShowProduct] = useState([{}]);
    const [activeButton, setActiveButton] = useState(null);
    const buttonRef = useRef(null);
    const product_New = [
        {
            img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/2.webp',
            name: 'Endeavor Daytripa',
            price: '$33.00'
        },
        {
            img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/4.webp',
            name: 'Driven Backpack',
            price: '$25.00'
        },
        {
            img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/6.webp',
            name: 'Savvy Shoulder Tote',
            price: '$30.00'
        },
        {
            img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/8.webp',
            name: 'Wayfarer Messenger Bag',
            price: '$50.00'
        }
    ];
    const product_best_sellers = [
        {
            img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/1.webp',
            name: 'Joust Duffle Bag',
            price: '$20.19'
        },
        {
            img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/3.webp',
            name: 'Impulse Duffle',
            price: '$65.00'
        },
        {
            img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/5.webp',
            name: 'Fusion Backpack',
            price: '$45.00'
        },
        {
            img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/7.webp',
            name: 'Joust Duffle Bag',
            price: '$20.19'
        }];
        const product_Featured = [

            {
                img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/6.webp',
                name: 'Savvy Shoulder Tote',
                price: '$30.00'
            },
            {
                img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/8.webp',
                name: 'Wayfarer Messenger Bag',
                price: '$50.00'
            },
            {
                img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/2.webp',
                name: 'Endeavor Daytripa',
                price: '$33.00'
            },
            {
                img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/4.webp',
                name: 'Driven Backpack',
                price: '$25.00'
            }];
            const product_OnSell = [
                {
                    img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/5.webp',
                    name: 'Fusion Backpack',
                    price: '$45.00'
                },
                {
                    img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/7.webp',
                    name: 'Joust Duffle Bag',
                    price: '$20.19'
                },
                {
                    img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/1.webp',
                    name: 'Joust Duffle Bag',
                    price: '$20.19'
                },
                {
                    img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/3.webp',
                    name: 'Impulse Duffle',
                    price: '$65.00'
                }];
    const getNew = (event) => {
        const buttonId = event.target.id;
        
        if (buttonId === 'btn-new') {
            setShowProduct(product_New)
        }
        setActiveButton(buttonId);
    }
    const getBestSellers = (event) => {
        const buttonId = event.target.id;
        
        if (buttonId === 'btn-bestsell') {
            setShowProduct(product_best_sellers)
        }
        setActiveButton(buttonId);
    }
    const getFeatured = (event) => {
        const buttonId = event.target.id;
        
            if (buttonId === 'btn-feature') {
                setShowProduct(product_Featured)
            }
            setActiveButton(buttonId);
        
    }
    const getOnSell = (event) => {
        const buttonId = event.target.id;
        
            if (buttonId === 'btn-sell') {
                setShowProduct(product_OnSell)
            }
            setActiveButton(buttonId);
            
    }
    const product_All = (event) => {
        const buttonId = event.target.id;
        if (buttonId === 'btn-all') {
            setShowProduct([...product_New, ...product_Featured, ...product_OnSell, ...product_best_sellers])
        }
        setActiveButton(buttonId);
        
    }
    useEffect(() => {
        buttonRef.current.click();
      }, []);   
return (
    <div>
        {/* <aside className="product-action-modal modal " id="action-CartAddModal" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-body">
                    <div className="product-action-view-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal">
                        <i className="pe-7s-close"></i>
                    </button>
                    <div className="modal-action-messages">
                        <i className="pe-7s-check"></i>  Added to cart successfully!
                    </div>
                    <div className="modal-action-product">
                        <div className="thumb">
                        <img src="assets/img/shop/modal1.webp" alt="Organic Food Juice" width="466" height="320"/>
                        </div>
                        <h4 className="product-name"><a href="single-product.html">Joust Duffle Bag</a></h4>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </aside> */}
        <section className="product_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="middle_content">
                            <h5>BEST PRODUCT</h5>
                            <h3><p>New Collection</p></h3>
                        </div>
                        <div className="products">
                            <button onClick={product_All}  ref={buttonRef} className={activeButton === 'btn-all' ? 'active' : ''} id="btn-all">ALL</button>
                            <button onClick={getNew} className={activeButton === 'btn-new' ? 'active' : ''} id="btn-new">NEW</button>
                            <button onClick={getBestSellers} className={activeButton === 'btn-bestsell' ? 'active' : ''}  id="btn-bestsell">BEST SELLERS</button>
                            <button onClick={getFeatured} className={activeButton === 'btn-feature' ? 'active' : ''}  id="btn-feature">FEATURED</button>
                            <button onClick={getOnSell} className={activeButton === 'btn-sell' ? 'active' : ''}  id="btn-sell">SELL</button>
                        </div>
                    </div>
                </div>

                <div className="row" id="product_collection" style={{position:'relative'}}>
                    {showProduct.map((elem,index)=>{
                        return <div className="col-lg-3 col-sm-6" key={index} id="pro_col" style={{position: 'relative', top: '0px'}}>
                        <div className="product-item">
                            <div className="product-img">
                                <img src={elem.img} width="270" height="320" alt='productimg'/>
                            </div>
                            <div className="product-info">
                                <h4>{elem.name}</h4>
                                <div className="prices">
                                    <span className="price">{elem.price}</span>
                                </div>
                            </div>
                            <div className="product-action">
                            <button type="button" className="btn-product-wishlist" data-bs-toggle="modal" data-bs-target="#action-WishlistModal">
                                    <i className="	fa fa-heart-o"></i>
                            </button>
                            <div className="product-action-links">
                            <button type="button" className="btn-product-cart" data-bs-toggle="modal" data-bs-target="#action-CartAddModal">
                                <i className="	fa fa-shopping-bag"></i>
                            </button>
                            <button type="button" className="btn-product-quick-view" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal">
                                <i className="fa fa-eye"></i>
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    })}

                </div>
            </div>
           
        </section>
    </div>
  )
}
