import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation}from 'react-router-dom'
import logo from '../../assets/logo/logoMovie.png'
import './navBar.css'



const optionNav= [
    {
      display: 'Movies',
      path:'/'
    },
    {
      display: 'Tv',
      path:'/tv'
    }
  
  ]

const NavBar = () => {
    const {pathname}=useLocation();
 

    const active= optionNav.findIndex(e =>e.path === pathname);
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand> 
      <Link to={'/'}>
        <img
              alt=""
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{' '} 
        </Link>  
        </Navbar.Brand>
      <Nav className="me-auto">
     
        {
            optionNav.map((e,i)=>(
            <li key={i} className={`${i===active ?'active':''}`}>
                <Nav.Link as={Link} to={e.path}>
                    {e.display}
                </Nav.Link>
            </li>
            ))
        }

      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar