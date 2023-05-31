

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">PakStore</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Category</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Productdetail</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ">Cart</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Header;