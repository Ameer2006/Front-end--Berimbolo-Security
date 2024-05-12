import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assest/style.css'

export default function Navbar() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light row">
            <Link className="navbar-brand ms-5 col-3" to="/" >Berimbolo security</Link>
            <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon" />
            </button>
            <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarNavDropdown">
                <ul className="navbar-nav col-12">
                    
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/FAQs">FAQs</Link>
                        </li>
                        <li className="nav-item me-md-5">
                            <Link className="nav-link me-md-5" to="/contact">Contact us</Link>
                        </li>

                        <li className="nav-item  me-md-5 ms-md-5">
                        </li>


                        <li className="nav-item ms-md-5">
                            <Link className="nav-link  ms-md-5" to="/login">Log in</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Sign up </Link>
                        </li>
                </ul>
            </div>
        </nav>
    );
}
