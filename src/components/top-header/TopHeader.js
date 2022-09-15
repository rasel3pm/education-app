import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationArrow,faEnvelope } from '@fortawesome/free-solid-svg-icons'

const TopHeader = () => {
  return (
    <div>
      <Navbar className='bg-warning'>
      <Container>
        <ul className='d-flex'>
          <li className='mx-4'><FontAwesomeIcon icon={faLocationArrow} /> 2072 Pinnickinick Street, WA 98370</li>

          <li> <FontAwesomeIcon icon={faEnvelope}/> info@website.com</li>
        </ul>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <FontAwesomeIcon icon={faEnvelope}/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default TopHeader
