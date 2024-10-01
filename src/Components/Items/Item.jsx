import React from 'react'
import "./item.css"
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${product.sku}`);
  };
  return (
    <>
    <div className="item">
        <div className="item__image">
            <img src={product.image} alt="item image"/>
            
        </div>
        <div>
            <h2 className="item__title">{product.name}</h2>
            <p className='item_desc'>{product.description}</p>
            <button className='know_more' onClick={handleClick} >Know more</button>
        </div>
    </div>
    </>
  )
}

export default Item