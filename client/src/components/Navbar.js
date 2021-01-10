import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__logo">
                <Link className="nav__logo-link" to="/products"><img src="bakery-logo.png" alt="logo" /><span>Bakery Shop</span></Link>
            </div>
            <ul className="nav__items">
                <li><Link className="nav__item-link" to="products">Products</Link></li>
                <li><Link className="nav__item-link" to="employees">Employees</Link></li>
            </ul>
            <button className="nav__toggle">
                <i className="fas fa-bars"></i>
            </button>
        </nav>
    )
}

export default Navbar
