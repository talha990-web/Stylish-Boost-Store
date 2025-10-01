import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Shop from './Pages/Shop.jsx';
import Category from './Pages/Category.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/men-banner.png';
import women_banner from './Components/Assets/women-banner.png';
import kid_banner from './Components/Assets/kid-banner.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Category banner={men_banner} category='men' />} />
          <Route path='/womens' element={<Category banner={women_banner} category='women' />} />
          <Route path='/kids' element={<Category banner={kid_banner} category='kid' />} />
          <Route path='/product'>
            <Route path=':product_id' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <ToastContainer position='top-center' autoClose={1500} />
    </div>
  );
}

export default App;
