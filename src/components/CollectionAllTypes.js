import React from 'react'

export default function CollectionAllTypes() {
    // const [activeBtn, setActiveBtn] = useState(null);
    // const [products, setProducts] = useState([]);

    // const handleBtnClick = (id) => {
    // if (id === "btn-new") {
    //     setProducts([]);
    //     }
    //     setActiveBtn(id);
    // };
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
                            <button onClick='product_All' className="active">ALL</button>
                            <button onClick="getNew()" id="btn-new">NEW</button>
                            <button onClick="getBestSellers()" id="btn-bestsell">BEST SELLERS</button>
                            <button onClick="getFeatured()" id="btn-feature">FEATURED</button>
                            <button onClick="getOnSell()" id="btn-sell">SELL</button>
                        </div>
                    </div>
                </div>

                <div className="row" id="product_collection" style={{position:'relative'}}>
                    

                </div>
            </div>
           
        </section>
    </div>
  )
}
