import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      debugger;
      alert("Login successful");
      localStorage.setItem("user", JSON.stringify(res.data));
      if (res.data.role == "ADMIN") {
        navigate("/admin/dashboard");
      } else if (res.data.role == "EMPLOYEE") {
        navigate("/employee/dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      alert("Invalid login");
    }
  };

  return (
    <div
      className="login-page d-flex align-items-center justify-content-center"
      style={{
        minHeight: "87vh",
        background: "#f5f7fb",
      }}
    >
      <Container>
        <div
          className="mx-auto text-center p-4 bg-white shadow rounded-4"
          style={{ maxWidth: "420px" }}
        >
          <div className="mb-3">
            <FaUserShield size={40} className="text-warning" />
          </div>
          <h3 className="fw-bold">Sign in to your account</h3>
          <p className="text-muted mb-4">
            Or <span className="text-warning">start your journey with us</span>
          </p>

          <Form>
            <Form.Control
              className="mb-3 py-2"
              name="username"
              placeholder="Username or Email"
              onChange={handleChange}
            />
            <Form.Control
              type="password"
              className="mb-3 py-2"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <Button
              className="w-100 py-2 fw-semibold"
              variant="warning"
              onClick={handleLogin}
            >
              Sign in
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Login;
