
import './App.css';
import { useEffect, useState } from 'react';
import Product from './components/Products';
import Header from './components/Header';
import Footer from './components/Footer';
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
      <h1 style={{textAlign:'center'}}>Our Products</h1>
      <div className='row'>
        {
          product.map((products) => {
            return (
              <div className='col-md-3' style={{ marginBottom: "10px" }}>
             <Product product = {products}/>
             </div>
            )
          })
        }
      </div>
      <Footer/>
    </div>
  );
}

export default App;
