import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

//Project files
import "./NavBar.scss";

function NavBarSite() {
  return (
    <Navbar className='navBar' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Link className="noHyperlink" to="/">
          <Navbar.Brand>Ben Napolitan</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="noHyperlink nav-item" to="/current-projects">
              <Navbar.Collapse>
                <Navbar.Text>Current Projects</Navbar.Text>
              </Navbar.Collapse>
            </Link>

            <Link className="noHyperlink" to="/gallery">
              <Navbar.Collapse>
                <Navbar.Text className="navText">Gallery</Navbar.Text>
              </Navbar.Collapse>
            </Link>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          <Nav>
            <Nav.Link href="#deets">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarSite;