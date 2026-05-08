import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="shadow-sm bg-white py-3 sticky-top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4 text-warning d-flex align-items-center gap-2"
        >
          <FaBuilding /> EMS
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="mx-auto gap-4 fw-medium">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <Link
              to="/login"
              className="text-dark text-decoration-none fw-medium"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="btn btn-warning px-4 rounded-3 fw-semibold"
            >
              Sign Up
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
