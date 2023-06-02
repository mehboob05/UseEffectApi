import { useEffect,useState } from "react";
import img1 from '../images/electronics.jpg';
import img2 from '../images/jewelery.jpg';
import img3 from '../images/men.jpg';
import img4 from '../images/women.jpg';
function Category (){
    const [category,setCategory] = useState([]);

    useEffect( ()=>{
        fetch("https://fakestoreapi.com/products/categories").then ((data) =>{
            return data.json();
        }).then ((res) =>{
            setCategory(res);
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

    
     category.map((cat)=>{
        if(cat == "electronics"){
            return{
                name:cat,
                image:'img1'
            }
        }  else if(cat == "jewelery"){
            return{
                name:cat,
                image:'img2'
            }
        } else if(cat == "men's clothing"){
            return{
                name:cat,
                image:'img3'
            }
        } else if(cat == "women's clothing"){
            return{
                name:cat,
                image:'img4'
            }
        }
        console.log(cat)
    })
   
    return(
       
       <>
        <div id="catee" className="container">
        <h1 className='my-3'>Our Category</h1>
            <div className="row">
            {
              
            }
            </div>
        </div>
       </> 
    )
}

export default Category;