import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="nav_div">
        <div className="logo">
          <a href="index.html">
            <img src="../images/logo.png" alt="logo" />
          </a>
        </div>

        <div className="searchbar">
          <form class="example" action="">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>

        <div className="navlinks">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/Signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/Cart">
                <i class="fa-sharp fa-solid fa-cart-shopping"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
