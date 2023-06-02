
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import Productdetail from './pages/Productdetail';


function App() {
  const [product, setProduct] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((data) => {   //fetch data
      return data.json();
    }).then((res) => {
      //get response
      setProduct(res);
      console.log(res)
    }).catch((err) => {
      console.log(err);     //catch error 
    })
  }, []); 

  const addToCart = (product)=>{

  const newArr =[...cart,product];
   setCart(newArr);

  }
  console.log(cart);
  return (
    <div className="container">
      <Header cart={cart}/>
     
     
      <Routes>
      <Route path='/' element={<Home addToCart={addToCart} product={product} />}/>
      <Route path='/category/' element={<Category/>}/>
      <Route path='/productdetail/:id' element={<Productdetail/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/cart' element={<Cart cart={cart} />}/>
       
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
