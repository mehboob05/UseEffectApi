import { useEffect,useState } from "react";
import img1 from '../images/electronics.jpg';
import img2 from '../images/jewelery.jpg';

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
    return(
       
       <>
        <div id="catee" className="container">
        <h1 className='my-3'>Our Category</h1>
            <div className="row">
            {
                category.map((cate) =>{
                    return (
                        <div className="col-md-6"style={{ marginBottom: "10px" }}>
                         
                        </div>
                    )
                })
            }
            </div>
        </div>
       </> 
    )
}

export default Category;