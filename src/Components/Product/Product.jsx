import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
  const {name,img,price, seller,ratings,quantity} = props.product;
  
  const handleAddToCart = props.handleAddToCart ;
  
 
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
         <button onClick={() => handleAddToCart(props.product)}  className='btn-cart'> Add to cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
        
    );
};

export default Product;