import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar__Container">
        <div className="NavBar__Logo">
          <Link to="/" className='NavBar__Title'>ViajandoJuntos.</Link>
        </div>
        <ul className="NavLinkContainer">
          <li className="NavItem">
              <Link to="/" className='NavLink'>Home</Link>
          </li>
          <li className="NavItem">
            <Link to="/foro" className='NavLink'>Foro</Link>
          </li>
          <li className="NavItem">
            <Link to="/planifica" className='NavLink'>Planifica</Link>
          </li>
          <li className="NavItem">
            <Link to="/beneficios" className='NavLink'>Beneficios</Link>
          </li>
          <li className="NavItem">
            <Link to="/aboutus" className='NavLink'>About Us</Link>
          </li>
          <li className="NavItem">
            <Link to="/login" className='NavLink'>Ingresa</Link>
          </li>
        </ul>
      </div>
      <Outlet/>
    </nav>
  );
};

export default NavBar;
