

function Cart(props) {
  
let total = 0;


    return (

        <>
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
                                                           <button className="btn btn-danger btn-md">Delete</button>
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