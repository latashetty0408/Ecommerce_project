import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import HeadDetail from './HeadDetail';

export default function WishList() {
    let WishList = [
        {
            id: 1,
            no: 1,
            Product_name:'Purepet Ocean Fish Adult Cat Food',
            category_name:'cat',
            Photo: 'https://cdn.shopify.com/s/files/1/0589/8262/9516/products/purepet-ocean-fish-adult-cat-food-411564.jpg?v=1676649476&width=493',
            Prize: 45,
        },
        {
            id: 2,
            no: 2,
            Product_name:'Wayfarer Messenger Bag',
            category_name:'Dog',
            Photo: 'https://htmldemo.net/tuime/tuime/assets/img/shop/8.webp',
            Prize: 50,
        },
        {
            id: 3,
            no: 3,
            Product_name:'Pedigree Meat & Rice Adult Dry Dog Food',
            category_name: 'Dog',
            Photo: 'https://cdn.shopify.com/s/files/1/0086/0795/7054/products/Pedigree-Adult-Dry-Dog-Food-Meat-Rice-10kg-FOP.jpg?v=1676366160&width=600',
            Prize: 30,
        },
        {
            id: 4,
            no: 4,
            Product_name:'Pellet Feed for Koi Fish',
            category_name:'Gold Fish',
            Photo: 'https://m.media-amazon.com/images/I/811et3fOKDL._SY355_.jpg',
            Prize: 28,
        }
    
    ];
    const [tableData, setTableData] = useState(WishList);

    const removeItemById = (id) => {
        const updatedItems = tableData.filter((item) => item.id !== id);
        setTableData(updatedItems);
    }
  return (
    <div>
      <main>
            <HeadDetail title='Wishlist' subtitle='Wishlist' />
            <section className="add_to_cart">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-bordered" id="myTable">
                                <thead>
                                    <tr className='text-center'>
                                        <th></th>
                                        <th>Photo</th>
                                        <th>Product name</th>
                                        <th>Unit Prize</th>
                                        <th>Stock Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody id="tbody">
                                    {tableData.map((elem,i) => {
                                        return <tr className='text-center' key={i}>     
                                            <td >
                                                <div className="Delete" id={`Delete_${elem.no}`}  onClick={() => removeItemById(elem.id)}>
                                                    <i className="remove fa fa-remove"></i>
                                                </div>
                                            </td>

                                            <td><img src={elem.Photo} height="75" width="75" alt='wishlistImg'/></td>
                                            <td>{elem.category_name}</td>
                                            <td>{elem.Product_name}</td>
                                            <td>In Stock</td>
                                            <td><button className='btn btn-shop-cart'>Add to Cart</button></td>
                                            
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}
