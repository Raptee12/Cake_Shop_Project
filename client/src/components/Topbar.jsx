import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {MdLocalOffer} from 'react-icons/md'
const Topbar = () => {
  return (
    <>
       <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
             <h6 className='text-light'>
                <MdLocalOffer className='text-warning'/> &nbsp;&nbsp;
                Free Delivery on Order Above 1200 Rs/-</h6>
              <Nav className='ms-auto'>
                <LinkContainer to="/" activeClassName='active'>
                   <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about" activeClassName='active'>
                   <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact" activeClassName='active'>
                   <Nav.Link>contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/policy" activeClassName='active'>
                   <Nav.Link>Terms and Policies</Nav.Link>
                </LinkContainer>

              </Nav>
        </Container>
       
       
       </Navbar>

    </>
  )
}

export default Topbar