import { Link } from "react-router-dom";


function Product(props) {
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={props.product.image} className="card-img-top" alt="..." style={{ width: "100%", height: "150px" }} />
                        <div className="card-body">
                            <h5 className="card-title text-truncate">{props.product.title}</h5>
                            <p className="card-text">${props.product.price}</p>
                            <button onClick={() => { props.addToCart(props.product) }} className="btn btn-primary">Add to Cart</button>
                            <Link to={`/productdetail/${props.product.id}`} className="btn btn-primary ms-3">View </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Product;