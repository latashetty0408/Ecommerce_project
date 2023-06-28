import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import DealOffer from './DealOffer';
import AboutArea from './AboutArea';
import CollectionAllTypes from './CollectionAllTypes';

export default function Category() {
  const category = [
    {
      id: 1,
      img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/category/1.webp',
      name: 'Cats'
    },
    {
      id: 2,
      img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/category/2.webp',
      name: 'Gold Fish'
    },
    {
      id: 3,
      img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/category/3.webp',
      name: 'Parrot'
    },
    {
      id: 4,
      img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/category/4.webp',
      name: 'Dog'
    },
    {
      id: 5,
      img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/category/5.webp',
      name: 'Rabbits'
    }
  ];

  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <section className="category_animal">
        <div className="container" id="categories">
          <div className="row">
            <div className="col-md-12">
              <div className="middle_content">
                <h5>TRENDING CATEGORIES</h5>
                <h3>
                  <p>Shop By Categories</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 images" id="category">
          {category.map((element)=>{
            return <div className="col" id="first" key={element.id}>
                      <div className="category-item">
                          <div className="category_img" style={{marginBottom: '10px'}}>
                              {/* <a href="category_products.html?category_id=${data[i].id}"> */}
                              <Link to={`/categories/${element.id}`}>
                                  <img src={element.img} className="rounded-circle" height="200" width="200"alt={element.name}/>
                              </Link>
                          </div>
                          <div className="category_name" style={{marginBottom: '50px'}}>
                              <h5 id="First">{element.name}</h5>
                          </div>
                      </div>
                    </div>
          })}
        </div>
      </section>
    </div> 
    <div>
      <Banner />
    </div>
    <div>
      <CollectionAllTypes />
    </div>
    <div>
      <DealOffer />
    </div>
    <div>
      <AboutArea />
    </div>
    <div>
      <Footer />
    </div>
  </>
  )
}
