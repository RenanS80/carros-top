import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-md navbar-dark main-nav">
            <div className="container">
                <Link to="/" className="nav-logo-text">
                    <h4>Carros top</h4>
                </Link>

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
                            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalog" activeClassName="active">Catálogo</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;