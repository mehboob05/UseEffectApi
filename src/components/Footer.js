

function Footer() {
  return (

    <div className="container">
      <footer className="py-5 bg-light">
        <div className="row ms-5">
          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Category</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Productdetail</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Cart</a></li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Category</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Productdetail</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Cart</a></li>
            </ul>
          </div>

          <div className="col-2">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Category</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Productdetail</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Contact</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Cart</a></li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;