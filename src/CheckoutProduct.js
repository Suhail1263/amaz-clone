import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';
function CheckoutProduct({id,title,image,price,rating}) {
  const[{basket},dispatch]=useStateValue(); 
  console.log(id,title,image,price,rating);
  const removeFromBasket=()=>{
    //remove the item from basket
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  } 
  return (
    <div class="checkoutProduct">
        <img className="checkoutProduct" src={image} alt=""/>
        <div className="checkoutProduct__info">
            <p className='checkoutProduct__title'>{title}</p>
           
            <p className='checkoutProduct__prize'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
        {
            Array(rating)
            .fill()
            .map((_,i)=>(
                <p>⭐</p>
                
            ))
        }
      </div>
      <button onClick={removeFromBasket}>Remove from basket</button>
        </div>

    </div>
  );
}

export default CheckoutProduct
