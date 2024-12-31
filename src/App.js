import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup.jsx';
import Cart from './Pages/Cart.jsx';
// import Hero from './Components/Hero/Hero.jsx';
// import Nav123 from './Components/Nav/Nav123.jsx';
// import Hero from '..Components/Hero/Hero'

function App() {
  return (
    <div>

      <BrowserRouter>

      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category='mens'/>}/>
        <Route path='/womens' element={<ShopCategory category='womens'/>}/>
        <Route path='/kids' element={<ShopCategory category='kids'/>}/>
        <Route path='product' element={<Product/>}/>
           <Route path=':productId' element={<Product/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
