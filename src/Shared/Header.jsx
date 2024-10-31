import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import React from "react";
import "../Shared/header.css"
import "../images/logo.png"
import logo from "../images/logo.png";
import "../Shared/header.css"
import { useSelector } from "react-redux";


export default function Header() {




    const counter = useSelector((state) => state.counter.counter_value)
    const productArr = useSelector((state) => state.cart.cart_value)

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar ">
                <div className="container mx-1">
                    {/* Logo */}
                    <Link to={"/"} className="navbar-brand">
                        <img
                            src={logo}
                            alt="Logo"
                            className="custom-logo"
                        />
                    </Link>


                    {/* Hamburger Menu for Mobile */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Links */}
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link  nav-link-custom" activeClassName="active">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Shop"} className="nav-link  nav-link-custom" activeClassName="active">
                                    Shop
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Deals"} className="nav-link  nav-link-custom" activeClassName="active">
                                    Deals
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/AboutUs"} className="nav-link  nav-link-custom" activeClassName="active">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/ContactUs"} className="nav-link  nav-link-custom" activeClassName="active">
                                    Contact us
                                </NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Favorites"} className="nav-link  nav-link-custom" activeClassName="active">
                                    Favorites
                                </NavLink>
                            </li>
                        </ul>







                        {/* Search Bar */}
                        <form className="d-flex ">
                            <input
                                className="form-control me-2 search-bar-custom"
                                type="search"
                                placeholder="Search products"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-light search-button-custom" type="submit">
                                Search
                            </button>
                        </form>

                        {/* Icons: Shopping Cart and User */}
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            <li className="nav-item">
                                <NavLink to={"/Cart"} className="nav-link text-white nav-icon-custom-cart" activeClassName="active"  >
                                    <FaShoppingCart size={20} /> Cart <span> {productArr.length} </span>

                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/Account"} className="nav-link text-white nav-icon-custom" href="/account">
                                    <FaUser size={20} /> Account
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    );
}
