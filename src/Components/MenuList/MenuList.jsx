import React from 'react';
import { list_items } from './../../assets/assets';
import "./MenuList.css";

const MenuList = ({ onCategorySelect }) => {
  return (
    <div className='shop_products' >
      <h3>Explore our products</h3>
      <div className='menu_list'>
        {list_items.map((item, index) => (
          <div 
            key={index} 
            className='menu_item'
            onClick={() => onCategorySelect(item.name)} 
          >
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
