import React from 'react'
import { Navbar, Offcanvas, Container, Nav } from 'react-bootstrap'

//implement moving between screens

const Header = ({ title }) => {
  return (
    <Navbar bg='dark' variant='dark' expand={false}>
      <Container fluid>
        <Navbar.Brand href='#' className='fs-2 fc'>
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar' />
        <Navbar.Offcanvas id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel'>{title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/seatscreen'>Seat</Nav.Link>
              <Nav.Link href='/statistic'>Statistic</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header
