import {
  Container,
  Row,
  Col,
  Card,
  Table,
  ProgressBar,
  Button,
} from "react-bootstrap";
import {
  FaUsers,
  FaClipboardCheck,
  FaMoneyCheckAlt,
  FaCalendarAlt,
} from "react-icons/fa";

function About() {
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
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h1 className="fw-bold text-primary mb-3">
                About Smart Employee Management System
              </h1>

              <p className="text-muted fs-5">
                Smart Employee Management System helps organizations manage
                employees, payroll, attendance, leave requests, and department
                activities efficiently with a modern dashboard interface.
              </p>
            </Col>
          </Row>

          <Row className="g-4 mb-5">
            <Col md={6} lg={3}>
              <Card className="shadow border-0 rounded-4 text-center h-100">
                <Card.Body className="p-4">
                  <FaUsers size={45} className="text-primary mb-3" />
                  <h4>Employee Management</h4>
                  <p className="text-muted">
                    Manage employee records and departments easily.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="shadow border-0 rounded-4 text-center h-100">
                <Card.Body className="p-4">
                  <FaClipboardCheck size={45} className="text-success mb-3" />
                  <h4>Attendance Tracking</h4>
                  <p className="text-muted">
                    Track employee attendance and working hours.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="shadow border-0 rounded-4 text-center h-100">
                <Card.Body className="p-4">
                  <FaMoneyCheckAlt size={45} className="text-warning mb-3" />
                  <h4>Payroll System</h4>
                  <p className="text-muted">
                    Generate payroll and salary reports quickly.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="shadow border-0 rounded-4 text-center h-100">
                <Card.Body className="p-4">
                  <FaCalendarAlt size={45} className="text-danger mb-3" />
                  <h4>Leave Management</h4>
                  <p className="text-muted">
                    Handle leave applications and approvals efficiently.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={6}>
              <Card className="shadow border-0 rounded-4 h-100">
                <Card.Body className="p-4">
                  <h3 className="mb-4 text-primary">Why Choose Us?</h3>
                  <Table bordered hover responsive>
                    <tbody>
                      <tr>
                        <td className="fw-bold">Easy Dashboard</td>
                        <td>User-friendly admin and employee dashboard</td>
                      </tr>

                      <tr>
                        <td className="fw-bold">Secure Data</td>
                        <td>Protected employee and payroll information</td>
                      </tr>

                      <tr>
                        <td className="fw-bold">Fast Performance</td>
                        <td>Quick and optimized system operations</td>
                      </tr>

                      <tr>
                        <td className="fw-bold">Responsive Design</td>
                        <td>Works on desktop, tablet, and mobile devices</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="shadow border-0 rounded-4 h-100">
                <Card.Body className="p-4">
                  <h3 className="mb-4 text-primary">System Performance</h3>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <span>Employee Management</span>
                      <span>95%</span>
                    </div>
                    <ProgressBar now={95} className="mt-2" />
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <span>Attendance System</span>
                      <span>90%</span>
                    </div>
                    <ProgressBar now={90} variant="success" className="mt-2" />
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <span>Payroll Management</span>
                      <span>85%</span>
                    </div>
                    <ProgressBar now={85} variant="warning" className="mt-2" />
                  </div>

                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <span>Leave Management</span>
                      <span>92%</span>
                    </div>
                    <ProgressBar now={92} variant="danger" className="mt-2" />
                  </div>

                  <Button variant="primary" size="lg">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
