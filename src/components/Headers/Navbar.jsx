import React from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <div className="container-lg shadow-lg ">
      <nav className="py-2 px-3 d-flex justify-content-between align-items-center">
          <Link to='/' className="nav-link"><h1 className="fs-2 fw-bolder">
            Show<span className="text-danger">Spotter</span>
          </h1></Link>
          <div className="nav-container">
            <NavLink to="/" className={({isActive})=> isActive ? 'text-danger nav-link route' : 'nav-link route'}>Home</NavLink>
            <NavLink to="/bookings" className={({isActive})=> isActive ? 'text-danger nav-link route' : 'nav-link route'}>All Bookings</NavLink>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
