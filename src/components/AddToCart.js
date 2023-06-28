import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddToCart() {
    let cart = [
    {
        id: 1,
        no: 1,
        Product_name:'Purepet Ocean Fish Adult Cat Food',
        category_name:'cat',
        Photo: 'https://cdn.shopify.com/s/files/1/0589/8262/9516/products/purepet-ocean-fish-adult-cat-food-411564.jpg?v=1676649476&width=493',
        Quantity: 1,
        Prize: 45,
        Subtotal:45
    },
    {
        id: 2,
        no: 2,
        Product_name:'Wayfarer Messenger Bag',
        category_name:'Dog',
        Photo: 'https://htmldemo.net/tuime/tuime/assets/img/shop/8.webp',
        Quantity: 1,
        Prize: 50,
        Subtotal:50
    },
    {
        id: 3,
        no: 3,
        Product_name:'Pedigree Meat & Rice Adult Dry Dog Food',
        category_name: 'Dog',
        Photo: 'https://cdn.shopify.com/s/files/1/0086/0795/7054/products/Pedigree-Adult-Dry-Dog-Food-Meat-Rice-10kg-FOP.jpg?v=1676366160&width=600',
        Quantity: 1,
        Prize: 30,
        Subtotal:30
    },
    {
        id: 4,
        no: 4,
        Product_name:'Pellet Feed for Koi Fish',
        category_name:'Gold Fish',
        Photo: 'https://m.media-amazon.com/images/I/811et3fOKDL._SY355_.jpg',
        Quantity: 1,
        Prize: 28,
        Subtotal:28
    }
];
const [tableData, setTableData] = useState(cart);
const handleQuantityIncrement = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData[index].Quantity += 1;
    updatedTableData[index].Subtotal =  updatedTableData[index].Quantity * updatedTableData[index].Prize ;

    // let a = quantity * prize;
    console.log(updatedTableData)
    setTableData(updatedTableData);
}
const handleQuantityDecrement = (index) => {
    const updatedTableData = [...tableData];
    if (updatedTableData[index].Quantity > 0) {
        updatedTableData[index].Quantity -= 1;
        updatedTableData[index].Subtotal =  updatedTableData[index].Quantity * updatedTableData[index].Prize ;

        setTableData(updatedTableData);
    }

}
const handleQuantityChange = (index, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[index].Quantity = value;
    setTableData(updatedTableData);
}
const removeItemById = (id) => {
    const updatedItems = tableData.filter((item) => item.id !== id);
    setTableData(updatedItems);
    };
return (
    <div>
        <main>
            <div className="page-header-area"
                style={{backgroundImage: 'url(https://htmldemo.net/tuime/tuime/assets/img/photos/bg1.webp)'}}>
                <div className="container pt-0 pb-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-header-content">
                                <h2 className="title" style={{fontSize: '48px', margin: '0 0 5px 14px'}}>Cart</h2>
                                <nav className="breadcrumb-area">
                                    <ul className="breadcrumb"
                                        style={{backgroundColor: 'transparent'}}>
                                        <li className="breadcrumb-li"><Link to="/" style={{color: '#0b0b0b'}}>Home</Link></li>
                                        <li className="breadcrumb-li breadcrumb-sep">||</li>
                                        <li className="breadcrumb-li" style={{color: '#721b65'}}>Cart</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="add_to_cart">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-bordered" id="myTable">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Photo</th>
                                        <th>Category</th>
                                        <th>Product name</th>
                                        <th>Quantity</th>
                                        <th>Prize</th>
                                        <th>Subtotal</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody id="tbody">
                                {tableData.map((item,index) => {
                                        return <tr className='text-center' key={index}>     
                                            <td>{item.no}</td>
                                            <td><img src={item.Photo} height="75" width="75" alt='cartImg'/></td>
                                            <td>{item.category_name}</td>
                                            <td>{item.Product_name}</td>
                                            <td className="product-quantity">
                                                <div className="pro-qty">
                                                <input type="text" id={`quantity_${item.no}`} max="1" value={item.Quantity} onChange={(e) => handleQuantityChange(index, e.target.value)} />
                                                <div className='dec qty-btn' onClick={() => handleQuantityDecrement(index)}>-</div>
                                                <div className=' inc qty-btn' onClick={() => handleQuantityIncrement(index)}>+</div>
                                                </div>
                                            </td>
                                            <td>{item.Prize}</td>
                                            <td>{item.Subtotal}</td>
                                            <td >
                                                <div className="Delete" id={`Delete_${item.no}`} onClick={() => removeItemById(item.id)}>
                                                    <i className="remove fa fa-remove"></i>
                                                </div>
                                            </td>
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
