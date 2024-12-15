import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Blog from './Components/Blog';
import About from './Components/About';
import Products from './Components/Products';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import PartnerSection from './Components/PartnerSection';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import { ProductProvider } from './Components/ProductContext';
import GoToTop from './Components/GoToTop';

function App() {
  return (
    <>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/partners' element={<PartnerSection />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <GoToTop />
      </ProductProvider>
    </>
  );
}

export default App;