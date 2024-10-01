import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../assets/assets'; // Import your product list

const ProductPage = () => {
  const { sku } = useParams(); // Get SKU from URL
  const product = products.find(item => item.sku === sku); // Find the product by SKU

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className='product_page'>
      

      <div className='product_img'>
      <img src={product.image} alt={product.name} />
      </div>
      <div className='product_info'>
      <h1>{product.name}</h1>
      
      <h3>{product.description}</h3>
      <p>{product.content}</p>
      </div>
      
    </div>
  );
}

export default ProductPage;
