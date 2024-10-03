import  { React, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../assets/assets'; 
import "./ProductPage.css"
const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const { sku } = useParams(); 
  const product = products.find(item => item.sku === sku);

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
