import { Button } from 'react-bootstrap';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const {cart}=useSelector((state)=>state.allCart);

  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Text>
              <Link to='/'>Product List</Link>
            </Navbar.Text>            
            <Navbar.Text>
              <Link to='/cart'>
                <Button>Cart ({cart.length})</Button>
              </Link>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header