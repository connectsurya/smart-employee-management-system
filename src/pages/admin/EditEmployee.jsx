import { useEffect, useState } from "react";
import { getDepartments } from "../../services/authService";
import {
  getEmployeeById,
  updateEmployee,
} from "../../services/employeeService";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    loadEmployee();
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    try {
      const res = await getDepartments();
      setDepartments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const [form, setForm] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    department: "",
    salary: "",
    experience: "",
    role: "",
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const res = await getEmployeeById(id);
      setForm(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateEmployee(id, form);
      alert("Employee Updated Successfully");
      navigate("/admin/employees");
    } catch (err) {
      console.error(err);
      alert("Update Failed");
    }
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Edit Employee</h4>
      <div className="card shadow-sm p-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Department</label>
              <select
                name="department"
                className="form-select"
                value={form.department}
                onChange={handleChange}
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
              <label>Salary</label>
              <input
                type="number"
                name="salary"
                className="form-control"
                value={form.salary}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Experience</label>
              <input
                type="number"
                name="experience"
                className="form-control"
                value={form.experience}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Role</label>
              <select
                name="role"
                className="form-select"
                value={form.role}
                onChange={handleChange}
              >
                <option value="ADMIN">ADMIN</option>
                <option value="EMPLOYEE">EMPLOYEE</option>
              </select>
            </div>
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-warning">
              Update Employee
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/admin/employees")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
