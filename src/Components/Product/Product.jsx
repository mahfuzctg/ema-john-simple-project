import React from 'react';
import './Product.css';

const Product = (props) => {
  const {name,img,price, seller,ratings,quantity} = props.product;
    return (
        <div className='product'>
           <img src={img} alt="" />
         <div className='product-info'>
         <h6>{name}</h6>
           <p>Price: ${price}</p>
           <p>Seller: {seller}</p>
           <p>Ratings: {ratings} Stars</p>
           <p>Quantity: {quantity}</p>
          
         </div>
         <button className='btn-cart'>Add to cart</button>
        </div>
        
    );
};

export default Product;