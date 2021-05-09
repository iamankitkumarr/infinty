import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import  Container  from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from '../image/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../context/authContex';
import  firebase from '../config'

const NavbarComponent = () => {
  const {currentUser} = useContext(AuthContext);
  if(currentUser==null){
    return (<>
      <Navbar bg="light" expand="lg" id="navbar">
  <Container>
<Navbar.Brand id="brand" href="#home">
     <img src={logo} style={{width:100,margin:5}}/>
    </Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="ml-auto">
       
  <Nav.Link> <Link id="link" to='/'> Home </Link> </Nav.Link>
  <Nav.Link> <Link id="link" to='/about'> About us </Link> </Nav.Link>
  <Nav.Link> <Link  id="link" to='/gallery'>Gallery</Link> </Nav.Link>
  <Nav.Link> <Link id="link" to='/contact'> Contact us </Link> </Nav.Link>
  <Nav.Link> <Link id="link" to='/signin'> Sign in</Link> </Nav.Link>

  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>
  </>);
  }
  return (<>
    <Navbar bg="light" expand="lg" id="navbar">
<Container>
<Navbar.Brand id="brand" href="#home">
   <img src={logo} style={{width:100,margin:5}}/>
  </Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="ml-auto">
     
<Nav.Link> <Link id="link" to='/dashboard'> Dashboard </Link> </Nav.Link>
<Nav.Link> <Link  id="link" to='/gallery'>Gallery</Link> </Nav.Link>
<Nav.Link> <Link id="link" to='/contact'> Contact us </Link> </Nav.Link>
<Nav.Link> <Link id="link" to='/feedback'> Feedback </Link> </Nav.Link>



</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
</>);
   
}

export default NavbarComponent;