import React from 'react'
import "./item.css"

const Item = ({product}) => {
  return (
    <>
    <div className="item">
        <div className="item__image">
            <img src={product.image} alt="item image"/>
            
        </div>
        <div>
            <h2 className="item__title">{product.name}</h2>
            <p className='item_desc'>{product.description}</p>
            <button className='know_more'>Know more</button>
        </div>
    </div>
    </>
  )
}

export default Item