

function Cart(props) {
    let total = 0;
 
    return (

        <>
         <button onClick={()=>{props.removeCartAll(props.product)}} className="btn btn-secondary btn-md float-end mt-4 me-3">Clear All</button>
            <h2>Our Cart Items</h2>
           
           
{
             
                props.cart.map((product) => {
                       
                   {  total += product.price}
                    return (
                        <>
                            
                            <section className="h-100" style={{backgroundColor: "#eee"}}>
                                <div className="container py-4  ">
                               
                                    <div className="row d-flex justify-content-center align-items-center h-100 mt-2">
                                        <div className="col-10 ">

                                            <div className="card rounded-3 mb-2">
                                                <div className="card-body p-5">
                                                    <div className="row d-flex justify-content-between align-items-center">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img
                                                                src={product.image}
                                                                className="img-fluid rounded-3" alt="..."/>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <p className="lead fw-normal mb-2">{product.title}</p>
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            
                                                        </div>
                                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                            <h5 className="mb-0">${product.price}</h5>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <svg onClick={()=>{props.removeToCart(props.product)}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{fill: "rgba(245, 0, 0, 0.9)" ,transform: "msFilter"}}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>  
                                
                            </section>
                        </>
                        
                    )
                })

                
            }

             <h1>Total:${total}</h1> 

        </>
    );



    
}

export default Cart;