import React, { useEffect, useState } from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import { carousel_assets } from '../../assets/assets'; 
import MenuList from '../../Components/MenuList/MenuList';
import "./Home.css";
import Popular from '../../Components/Popular/Popular';


const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='homePage'>
      <Carousel images={carousel_assets} />
      <MenuList onCategorySelect={handleCategorySelect} />
      <hr />
      <Popular selectedCategory={selectedCategory} />
    
    </div>
  );
};

export default Home;
