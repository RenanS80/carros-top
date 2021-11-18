import './styles.css';
import 'bootstrap/js/src/collapse.js';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark main-nav">
            <div className="container">
                <a href="/" className="nav-logo-text">
                    <h4>Carros top</h4>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dscatalog-navbar"
                    aria-controls="dscatalog-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="dscatalog-navbar" className="collapse navbar-collapse">
                    <ul className="navbar-nav offset-md-2 main-menu">
                        <li className="nav-item">
                            <a href="/" className="active">Home</a>
                        </li>
                        <li>
                            <a href="/catalog" className="active">Catálogo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;