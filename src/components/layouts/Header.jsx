import "../../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={logo} alt="Brand logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/cart">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/cart">Shop</Nav.Link>
            <Nav.Link as={Link} to="/cart">Blog</Nav.Link>
            <Nav.Link as={Link} to="/cart">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
