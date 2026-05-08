import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDepartments } from "../../services/authService";
import { addEmployee } from "../../services/employeeService";

function AddEmployee() {
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
    role: "EMPLOYEE",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addEmployee(form);
      alert("Employee Added Successfully");
      navigate("/admin/employees");
    } catch (err) {
      console.error(err);
      alert("Failed to add employee");
    }
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Add New Employee</h4>
      <div className="card shadow-sm p-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Department</label>
              <select
                name="department"
                className="form-select"
                value={form.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept.deptId} value={dept.name}>
                    {dept.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                name="salary"
                className="form-control"
                value={form.salary}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Experience</label>
              <input
                type="number"
                name="experience"
                className="form-control"
                value={form.experience}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Role</label>
              <select
                name="role"
                className="form-select"
                value={form.role}
                onChange={handleChange}
              >
                <option value="EMPLOYEE">EMPLOYEE</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-warning px-4">
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
