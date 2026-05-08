import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section text-dark pt-5 pb-3">
      <Container>
        <Row className="gy-4">
          <Col lg={3} md={6}>
            <h4 className="fw-bold text-warning">EMS</h4>
            <p className="text-muted">
              Smart Employee Management System to manage your workforce,
              payroll, and HR operations efficiently.
            </p>

            <div className="d-flex gap-3 mt-3">
              <FaFacebook className="footer-icon" />
              <FaTwitter className="footer-icon" />
              <FaLinkedin className="footer-icon" />
              <FaGithub className="footer-icon" />
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-3">SOLUTIONS</h6>
            <ul className="list-unstyled footer-links">
              <li>Payroll</li>
              <li>Attendance</li>
              <li>Leave Management</li>
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-3">SUPPORT</h6>
            <ul className="list-unstyled footer-links">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-3">COMPANY</h6>
            <ul className="list-unstyled footer-links">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
            </ul>
          </Col>

          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3">LEGAL</h6>
            <ul className="list-unstyled footer-links">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4 border-secondary" />

        <div className="text-center text-muted small">
          © 2026 Employee Management System. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
