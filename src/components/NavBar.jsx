import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'



function NavBar() {
  return (
    <Navbar bg="danger" data-bs-theme="dark">
    <Container>
      <Navbar.Brand className='navba fw-bolder'>Shopping cart</Navbar.Brand>
    </Container>
  </Navbar>

  )
}

export default NavBar