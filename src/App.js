
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
  return (
    <div className="container">
      <Header/>
     
     
      <Routes>
      <Route path='/' element={<Home product={product} />}/>
      <Route path='/category' element={<Category/>}/>
      <Route path='/productdetail' element={<Productdetail/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/cart' element={<Cart/>}/>
       
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
