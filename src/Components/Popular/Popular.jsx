import React from 'react';
import { products } from "../../assets/assets";
import './Popular.css';
import Item from '../Items/Item';
import { Element } from 'react-scroll';

const Popular = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products.filter(product => product.Popular === 1); 

  return (
    <Element name="products" className="element" >

    <div className='product_items' id='products'>
      
      <h2 className='product_title'>
        {selectedCategory ? `${selectedCategory} items` : 'Our most popular items'}
      </h2>

      <div className='product_items_container'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} className='product_item'>
              <Item product={product} />
            </div>
          ))
        ) : (
          <p>No products available for this category.</p>
        )}
      </div>
    </div>
    </Element>
  );
};

export default Popular;
