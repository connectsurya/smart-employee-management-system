import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Form,
} from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <>
      <section
        className="page-section pt-5 pb-5"
        style={{
          minHeight: "100vh",
          background: "#f4f7fc",
        }}
      >
        <Container className="mt-5">
          <div className="text-center mb-5">
            <h1 className="fw-bold text-primary">Contact Us</h1>
            <p className="text-muted">
              We would love to hear from you. Get in touch with us anytime.
            </p>
          </div>

          <Row className="g-4">
            <Col lg={5}>
              <Card className="shadow border-0 rounded-4 h-100">
                <Card.Body className="p-4">
                  <h3 className="mb-4 text-dark">Contact Information</h3>
                  <Table bordered hover responsive className="align-middle">
                    <tbody>
                      <tr>
                        <td className="fw-bold">
                          <FaEnvelope className="me-2 text-primary" />
                          Email
                        </td>
                        <td>support@ems.com</td>
                      </tr>

                      <tr>
                        <td className="fw-bold">
                          <FaPhoneAlt className="me-2 text-success" />
                          Phone
                        </td>
                        <td>+91 9876543210</td>
                      </tr>

                      <tr>
                        <td className="fw-bold">
                          <FaMapMarkerAlt className="me-2 text-danger" />
                          Location
                        </td>
                        <td>Chennai, India</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={7}>
              <Card className="shadow border-0 rounded-4">
                <Card.Body className="p-4">
                  <h3 className="mb-4 text-dark">Send Message</h3>
                  <Form>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                        />
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                        />
                      </Col>
                    </Row>

                    <div className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" placeholder="Enter subject" />
                    </div>

                    <div className="mb-4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Write your message..."
                      />
                    </div>

                    <Button variant="primary" size="lg">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
