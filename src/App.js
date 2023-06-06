
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import Productdetail from './pages/Productdetail';

import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const[query,setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((data) => {   //fetch data
      return data.json();
    }).then((res) => {
      //get response
      setProduct(res);
      setFilteredProducts(res);
      console.log(res)
    }).catch((err) => {
      console.log(err);     //catch error 
    })
  }, []);

// add cart function and add card notification 
  const notify = () => toast.success("Product added to cart");

  const addToCart = (product) => {

    const newArr = [...cart, product];
    setCart(newArr);
    notify();

  }
  // console.log(cart);
// remove  single product from cart function
  const removeToCart =(index) =>{
   const newArr = cart.toSpliced(index,1);
   setCart(newArr)
  }

  // clear all products from cart function
  const removeCartAll = (index)=>{
    const newArr = cart.toSpliced(index);
   setCart(newArr)
  }
// Search product funtion 
const searchProducts =(search) => {
  const newArr = product.filter((item)=>{
    return item.title.toLowerCase().includes(search.toLowerCase());
  });
  setFilteredProducts(newArr);
}

  return (
    <div className="container">

      <ToastContainer
        position="top-center"
        autoClose={500}
        transition={Flip}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />


      <Header cart={cart} />
      <input type='text' onKeyUp={(e)=> searchProducts(e.target.value)}/>

      <Routes>
        <Route path='/' element={<Home  addToCart={addToCart} product={filteredProducts} />} />
        <Route path='/category/' element={<Category />} />
        <Route path='/productdetail/:id' element={<Productdetail />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/cart'  element={<Cart cart={cart} removeToCart={removeToCart} removeCartAll={removeCartAll}/>} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
