import React, { Component } from 'react'
import { NavLink, Link, withRouter } from "react-router-dom";
import { HashLink as HashNavLink } from 'react-router-hash-link';

import "../../assets/css/Header.scss";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="nav-container">
                    <Link to="/" className="">
                        <img
                            className="nav-logo"
                            alt="logo"
                            src={require("../../assets/images/logos/logotemp.png")}
                        />
                        <span className="nav-l-text">EDS - KC</span>
                    </Link>
                    <div className="nav-links">
                        <NavLink 
                            exact
                            to="/" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            Home
                        </NavLink>
                        <NavLink 
                            exact
                            to="/about" 
                            className="nav-link" 
                            activeClassName="nav-select">
                            About
                        </NavLink>
                        <HashNavLink 
                            to="/#Contact" 
                            className="md-blue-btn nav-button">
                            Contact
                        </HashNavLink>
                    </div>
                    
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);