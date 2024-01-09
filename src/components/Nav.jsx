import "./css/Nav.css"
import logo from "../../src/logo.svg"
import { NavLink } from "react-router-dom"

export const Nav = () => {
   return(
      <nav className="nav-container">
         <img className="logo" src={logo} alt="Logo little lemon restaurant"/>
         <ul className="anchor-container">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/">About</NavLink>
            <NavLink className="link" to="/">Menu</NavLink>
            <NavLink className="link" to="/">Reservations</NavLink>
            <NavLink className="link" to="/">Order Online</NavLink>
            <NavLink className="link" to="/booking">Log In</NavLink>
         </ul>
         <ul className="menu">
            <span></span>
            <span></span>
            <span></span>
         </ul>
      </nav>
   )
}