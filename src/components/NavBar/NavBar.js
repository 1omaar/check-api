import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './NavBar.css'
function NavBar() {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Cocktail's World</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className='Nav_Link'>Home</Link>    
                    <Link to="/AboutUs" className='Nav_Link'>About Us</Link>    
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar
