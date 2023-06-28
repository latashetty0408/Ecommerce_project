import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';

export default function ProductCollection() {
    const product_New = [
        {
            category_id: 1,
            product_data: [
                {
                    img: 'https://cdn.shopify.com/s/files/1/0589/8262/9516/products/purepet-ocean-fish-adult-cat-food-411564.jpg?v=1676649476&width=493',
                    name: 'Purepet Ocean Fish Adult Cat Food',
                    price: '$45.00'
                },
                {
                    img: 'https://htmldemo.net/tuime/tuime/assets/img/shop/4.webp',
                    name: 'Driven Backpack',
                    price: '$25.00'
                },
                {
                    img: 'https://www.puprise.com/wp-content/uploads/2018/11/Whiskas-Adult-Chicken-Flavour-Dry-Cat-Food-400x400.jpg',
                    name: 'Whiskas Adult Chicken Flavour Dry Cat Food',
                    price: '$55.00'
                },
                {
                    img: 'https://www.puprise.com/wp-content/uploads/2018/07/Lara-Junior-With-Chicken-Dry-Cat-Food-Lara-Junior-With-Chicken-Dry-Cat-Food-1-Lara-Junior-With-Chicken-Dry-Cat-Food-2.jpg',
                    name: 'Versele-Laga Lara Junior With Chicken Dry Cat Food',
                    price: '$48.00'
                },

            ]

        },
        {
            category_id: 2,
            product_data: [
                {
                    img: 'https://m.media-amazon.com/images/I/811et3fOKDL._SY355_.jpg',
                    name: 'Pellet Feed for Koi Fish',
                    price: '$28.00'
                },
                {
                    img: 'https://cdn-5e9bdbc9f911c8155c5067c0.closte.com/wp-content/uploads/2018/06/Tetra-Bits-Complete-Fish-food-93-gms-Indiefur.com_.jpg',
                    name: 'Tetra Bits Complete fish food 93 gm',
                    price: '$30.00'
                },
                {
                    img: 'https://m.media-amazon.com/images/I/81W+eYpvN0L._SY550_.jpg',
                    name: 'HIKARI Tropical Algae Wafers | 20g | Aquarium Fish Food For All Life Stages',
                    price: '$45.00'
                },
                {
                    img: 'https://www.bigbasket.com/media/uploads/p/l/40269865_1-taiyo-pluss-discovery-discovery-gold-fish-flakes-fish-food-premium.jpg',
                    name: 'Taiyo Pluss Discovery Discovery Gold Fish Flakes Fish Food  ',
                    price: '$22.00'
                },

            ]

        },
        {
            category_id: 3,
            product_data: [
                {
                    img: 'https://cdn.shopify.com/s/files/1/0623/3915/4151/products/ZVP-2700_335x335.jpg?v=1656756023',
                    name: 'Vitapol Complete Food For Big Parrots',
                    price: '$77.00'
                },
                {
                    img: 'https://m.media-amazon.com/images/I/71D04aphzEL._SY355_.jpg',
                    name: 'Nature Forever Parrot Food',
                    price: '$30.00'
                },
                {
                    img: 'https://petshopindia.com/image/cache/data/SMARTHEART/smartheart-parrot-and-conures-bird-food-400-gm-400x400.jpg',
                    name: 'SMARTHEART PARROT AND CONURES BIRD FOOD',
                    price: '$30.00'
                },
                {
                    img: 'https://petshopindia.com/image/cache/catalog/Versele/wsdn11009-400x400.jpg',
                    name: 'VERSELE PARROT 1 KG FOR BIRD PRESTIGE',
                    price: '$38.00'
                }
            ]

        },
        {
            category_id: 4,
            product_data: [
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
                    img: 'https://cdn.shopify.com/s/files/1/0086/0795/7054/products/Pedigree-Adult-Dry-Dog-Food-Meat-Rice-10kg-FOP.jpg?v=1676366160&width=600',
                    name: 'Pedigree Meat & Rice Adult Dry Dog Food',
                    price: '$30.00'
                },
                {
                    img: 'https://cdn.shopify.com/s/files/1/0312/8826/2795/products/Arden_Grange_Adult_Small_and_Medium_Breed_-_Fresh_chicken_and_Rice_Multiple_Sizes_-D-AGR-DF-003-2kg_493x493.png?v=1582356147',
                    name: 'Arden Grange Adult (Small and Medium Breed) Dry Dog Food - Fresh chicken and Rice',
                    price: '$50.00'
                }
            ]

        },
        {
            category_id: 5,
            product_data: [
                {
                    img: 'https://www.jiomart.com/images/product/600x600/rvhede1guc/jainsons-rabbit-food-pellets-highly-nutritious-diet-suitable-for-all-type-rabbit-400-gram-pack-1-product-images-orvhede1guc-p591224016-0-202204270932.jpg',
                    name: 'Jainsons Rabbit Food Pellets Highly Nutritious Diet',
                    price: '$30.00'
                },
                {
                    img: 'https://www.puprise.com/wp-content/uploads/2020/02/Smartheart-Rabbit-Food-Wildberry-Flavour-1kg.jpg',
                    name: 'SmartHeart Rabbit Food ',
                    price: '$54.00'
                },
                {
                    img: 'https://www.puprise.com/wp-content/uploads/2018/08/Vitapol-Karma-Complete-Food-for-Rabbits-400gm.jpg',
                    name: 'Vitapol Karma Complete Food for Rabbits, 400gm',
                    price: '$80.00'
                },
                {
                    img: 'https://cdn.shopify.com/s/files/1/0312/8826/2795/products/boltz-rabbit-litter-spray-for-bunnies_493x493.jpg?v=1664349513',
                    name: 'Boltz Antibacterial Rabbit Litter Spray',
                    price: '$59.00'
                }
            ]
        }
    ];
    const [products , setProducts] = useState(product_New)
    // console.log(useParams());
    const {category_id } = useParams();
    // eslint-disable-next-line
    useEffect(() => {
        getProduct();
    }, [])
    const getProduct = ()=>{
        const result = product_New.filter((item) => item.category_id === parseInt(+category_id));
        console.log(result);
        setProducts(result);
        // console.log(products);
    }
    return (
    <>
    <div>
      <Banner />
    </div>
    <section className="product_section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="middle_content">
                            <h3><p>Products by Category</p></h3>
                    </div>
                </div>
            </div>
            <div className="row" id="product_collection" style={{position: 'relative'}}>
                { products.map((item,i )=>{
                    return <div className="col-lg-12" style={{position: 'relative', top: '0px'}} key={i}>
                        <div className="row" style={{position: 'relative'}}>
                        {item.product_data.map((data, index)=>{
                            return <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" id="pro_col" key={index} style={{position: 'relative', top: '0px'}}>
                            <div className="product-item">
                                <div className="product-img">
                                    <img src={data.img} alt="product_img" width="270" height="320"/>
                                </div>
                                <div className="product-info">
                                    <h4>{data.name}</h4>
                                    <div className="prices">
                                        <span className="price">{data.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        })}
                        </div>
                    </div>
                })}
            </div>
        </div>
    </section> 
    <div>
      <Footer />
    </div>  
    </>
)
}
