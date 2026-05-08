import { Container, Row, Col } from "react-bootstrap";
import {
  FaUsers,
  FaMoneyBillWave,
  FaClipboardList,
  FaCalendarCheck,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUsers />,
    title: "Employee Management",
    desc: "Keep employee records organized and accessible.",
  },
  {
    icon: <FaClipboardList />,
    title: "Leave Management",
    desc: "Automate leave requests and approvals.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Payroll Processing",
    desc: "Simplify payroll calculations and payments.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Attendance Tracking",
    desc: "Monitor employee attendance easily.",
  },
];

function Features() {
  return (
    <section
      className="d-flex align-items-center bg-white"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <div className="text-center mb-5 pb-5">
          <h6 className="text-warning fw-bold">OUR FEATURES</h6>
          <h2 className="fw-bold">A better way to manage your workforce</h2>
          <p className="text-muted">
            Everything you need to run HR operations efficiently.
          </p>
        </div>

        <Row className="g-4">
          {features.map((f, i) => (
            <Col md={6} key={i}>
              <div className="d-flex gap-3 p-4 shadow-sm rounded bg-light h-100">
                <div
                  className="bg-warning text-white d-flex align-items-center justify-content-center rounded"
                  style={{
                    width: "60px",
                    height: "60px",
                    fontSize: "22px",
                  }}
                >
                  {f.icon}
                </div>

                <div>
                  <h5 className="fw-semibold">{f.title}</h5>
                  <p className="text-muted mb-0">{f.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;
