
import React, { useState, useEffect } from "react";
import { NavLink ,useNavigate} from 'react-router-dom';
import "./Navbar.css";
import logo from './images/gol-logo1.png'
import Vector from './images/Vector.png'

function Navbar() {
  const [scroll, setScroll] = useState(false);
const navigate = useNavigate();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    navigate('/');
    window.location.reload(false);
      };

  return (
    <>

    <div className={scroll ? "navbar opaque" : "navbar transparent"}>
   
        <div className="container">
        <div className="navlogo">   <NavLink   to="/" className="logo"> <img src={logo} /> </NavLink>
            
            </div>

            <div className="navItems">
       
          <ul className="menu" style={{marginRight:"", marginTop:"1%"}}>
          <li className="dropdown">
            <NavLink  to="/" >Find Reservations </NavLink>
            </li>
          <li className="dropdown">
          <a href="#" >Packages <img src={Vector}/></a>
          <ul className="dropdown-content">
          <li><a href="#" className="dropdown-content-menu-1"> Product 1</a></li>
            <li><a href="#" className="dropdown-content-menu-2">Product 2</a></li>
            <li><a href="#" className="dropdown-content-menu-3">Product 3</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#">About Lakshadweep <img src={Vector}/></a>
          <ul className="dropdown-content">
            <li><a href="#" className="dropdown-content-menu-1">Product 1</a></li>
            <li><a href="#" className="dropdown-content-menu-2">Product 2</a></li>
            <li><a href="#" className="dropdown-content-menu-3">Product 3</a></li>
          </ul>
        </li>
            <li className="dropdown">
            <NavLink  to="/contact" >Contact Us </NavLink>
            </li>
          
            <li className="dropdown">
              <NavLink   to="/memberlist" >Memberlist </NavLink>
            </li>
            <li className="dropdown">
              <NavLink  to="/addmember" >AddMember </NavLink>
            </li>
            <li className="dropdown">
              <NavLink  to="/singup" onClick={logout} >Logout </NavLink>
            </li>
         <li className="login">
         <NavLink  className="login" to="/singup" style={{color:"rgba(50, 130, 173, 1)"}}>Login</NavLink>

         </li>
         <li className="signup">
         <NavLink  className="signup" to="/singup" style={{color:"white"}}>Singup</NavLink>

         </li>


          </ul>
          </div>
        </div>
      </div>
      </>
    );
  }

  export default Navbar;
