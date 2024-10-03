import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import ProductPage from './Pages/ProductPage/Productpage';
import Footer from './Components/Footer/Footer';

import GoToTop from './Components/GoToTop/GoToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Correctly passing components using JSX */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/:sku" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <GoToTop />
    </div>
  );
}

export default App;
