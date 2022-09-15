import React from 'react'
import { Navbar, Container, Button, Form, Nav, NavDropdown } from 'react-bootstrap'
// import { NavLink } from 'react-router-dom'
import logo from '../../asset/picture/logo.png';
import './mainHeade.css'


  // const navBar =document.querySelector("#Navabr");
  // const navTop= navBar.offsetTop

  // function fixedNav(){
  //   if(window.scrollY>=navTop){
  //     navBar.classList.add("fixed")
  //   }else{
  //     navBar.classList.remove("fixed")
  //   }


  // }
  // window.addEventListener("scroll",fixedNav)
const MainHeader = () => {

  return (
    <div>
        <nav className='sticky'>
        <Navbar expand="lg" className='shadow-sm'>
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              sticky="top"
            >
              <Nav.Link href="#action2">Course</Nav.Link>
              <Nav.Link href="#action2">Pages</Nav.Link>
              <Nav.Link href="#action2">Blog</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">Search</Button>
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </nav>
    </div>
  )
}

export default MainHeader