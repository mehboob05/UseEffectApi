import Products from '../components/Products';

function Home(props) {

  if (props.product.length > 0) {
    return (

      <>
        <h1 className='my-3'>Our Products</h1>
        <div className='row'>
          {
            props.product.map((products) => {
              return (
                <div className='col-md-3' style={{ marginBottom: "10px" }}>
                  <Products product={products} key={products.id} />
                </div>
              )
            })
          }
        </div>
      </>
    )
  } else {

    return (
      <>
      <div className='d-block mx-auto my-4 text-center'>
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only"></span>
      </div>
      </div>
      </>
      )

  }
}

export default Home;