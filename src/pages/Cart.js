

function Cart(props) {
    return (
        <>
            <h2>Our Cart Items</h2>
            {
                props.cart.map((product) => {
                    return (
                        <>
                          
                        </>
                    )
                })
            }

        </>
    );
}

export default Cart;