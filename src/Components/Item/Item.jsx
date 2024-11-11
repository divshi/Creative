import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';


const Item = (props) => {
  // Log the image path to see if it's correct
  console.log(props.image);
  
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
        Rs {props.new_price}
        </div>
        <div className="item-price-old">
        Rs {props.old_price}
        </div>
      </div>
    </div>
  )
}


export default Item
