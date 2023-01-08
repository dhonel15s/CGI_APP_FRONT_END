// IMPORT: DEPENDENCIES
import { useContext } from "react";
import { NavLink } from "react-router-dom";

// IMPORT: BOOTSTRAP ELEMENTS
import { Nav, Navbar, Button } from "react-bootstrap";

// IMPORT: CSS
import "../App.css";

// IMPORT: USER CONTEXT
import UserContext from "../UserContext.js";

// APP NAVBAR FUNCTION MAIN --------------------------------------------------------------
export default function AppNavbar(){

	// GET LOGGED-IN USER DETAILS
	let user = {
	    token: sessionStorage.getItem("token")
	  }

	// APPNAVBAR MAIN DESIGN----------------------------------------------- 
	if(user.token === null){
		return (
		   <>
		   <Navbar sticky="top" className="navbar-bg justify-content-center border border-light-subtle">
		     <Nav className="py-2" activeKey="/login">
		       <Nav.Item>
		         <Nav.Link className="nav-text" as={ NavLink } to="/login" end>Login</Nav.Link>
		       </Nav.Item>
		     </Nav>
		   </Navbar>
		   </>
		 )
	} 
	
	else{
		return (
		   <>
		   <Navbar sticky="top" className="navbar-bg justify-content-center border border-light-subtle">
		     <Nav className="py-2" sticky="top" activeKey="/home">
		       <Nav.Item>
		         <Nav.Link className="nav-text" as={ NavLink } to="/home" end>Home</Nav.Link>
		       </Nav.Item>
		       <Nav.Item>
		         <Nav.Link className="nav-text" as={ NavLink } to="/careerobjectives" end>Career Objectives</Nav.Link>
		       </Nav.Item>
		       <Nav.Item>
		         <Nav.Link className="rounded-pill px-3 py-1 mx-2 text-white violet-button" as={ NavLink } to="/logout" end>Logout</Nav.Link>
		       </Nav.Item>
		     </Nav>
		   </Navbar>
		   </>
		 )
	} 
}