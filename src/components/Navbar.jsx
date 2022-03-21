import React from 'react'
import { Link } from "react-router-dom";
import "./style.css"
import { NavLink } from "react-router-dom";
// import {Imgg} from "./images/bg.jpg"


const Navbar = () => {
    let activeStyle = {
        textDecoration: "none",
        backgroundColor: "orange",
        border: "2px solid black",
        borderRadius: "30px"
      };
  return (
    <div className='mainDiv'>
      {/* <img src="{Imgg}" alt="" /> */}
    <div className="myNavBar">
    <ul>
      <li>
        {" "}
        <NavLink
          style={({ isActive }) => {
            return isActive ? activeStyle : null;
          }}
          className="navlinks"
          to="/"
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) => {
            return isActive ? activeStyle : undefined;
          }}
          className="navlinks"
          to="/about"
        >
          ABOUT
        </NavLink>
      </li>
      <li>


        <NavLink
          style={({ isActive }) => {
            return isActive ? activeStyle : undefined;
          }}
          className="navlinks"
          to="/contact"
        >
          CONTACT
        </NavLink>
      </li>

<li>
      <NavLink
          style={({ isActive }) => {
            return isActive ? activeStyle : undefined;
          }}
          className="navlinks"
          to="/services"
        >
          FEEDBACK
        </NavLink>
      </li>


    </ul>
  </div>
</div>

);
};

export default Navbar
