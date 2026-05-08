import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="d-flex align-items-center justify-content-center text-center bg-light"
      style={{ minHeight: "88vh" }}
    >
      <Container>
        <h1 className="fw-bold display-4">
          Manage Your Team <br />
          <span className="text-warning">Efficiently & Seamlessly</span>
        </h1>

        <p
          className="text-muted fs-5 mt-3 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          The all-in-one platform to streamline your HR processes, from payroll
          and attendance to leave management and announcements.
        </p>

        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/signup" className="btn btn-warning px-4 py-2 rounded-3">
            Get Started
          </Link>

          <Link
            to="/login"
            className="btn btn-outline-dark px-4 py-2 rounded-3"
          >
            Login
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
