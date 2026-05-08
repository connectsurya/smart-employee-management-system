import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";

import { registerUser, getDepartments } from "../services/authService";

function Signup() {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);

  const [form, setForm] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    department: "",
    salary: "",
    experience: "",
    password: "",
  });

  useEffect(() => {
    getDepartments()
      .then((res) => setDepartments(res.data))
      .catch(() => alert("Failed to load departments"));
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    try {
      await registerUser(form);
      alert("Registered Successfully");
      navigate("/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fb" }}>
      <Container fluid>
        <Row className="min-vh-100">
          <Col
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <div
              className="bg-white p-4 p-md-5 rounded-4 shadow"
              style={{ width: "100%", maxWidth: "900px" }}
            >
              <div className="text-center mb-3">
                <FaUserPlus size={35} className="text-warning" />
              </div>

              <h3 className="text-center fw-bold mb-2">Create Account</h3>
              <p className="text-center text-muted mb-4">
                Already have an account?{" "}
                <span
                  className="text-warning fw-semibold"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </span>
              </p>

              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" onChange={handleChange} />
                  </Col>

                  <Col md={6}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" onChange={handleChange} />
                  </Col>

                  <Col md={6}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" onChange={handleChange} />
                  </Col>

                  <Col md={6}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" onChange={handleChange} />
                  </Col>

                  <Col md={6}>
                    <Form.Label>Department</Form.Label>
                    <Form.Select name="department" onChange={handleChange}>
                      <option value="">Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept.deptId} value={dept.name}>
                          {dept.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>

                  <Col md={6}>
                    <Form.Label>Salary</Form.Label>
                    <Form.Control name="salary" onChange={handleChange} />
                  </Col>

                  <Col md={6}>
                    <Form.Label>Experience</Form.Label>
                    <Form.Control name="experience" onChange={handleChange} />
                  </Col>

                  <Col md={6}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </Col>

                  <Col md={12}>
                    <Button
                      variant="warning"
                      className="w-100 py-2 fw-semibold mt-2"
                      onClick={handleSignup}
                    >
                      Create Account
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
