import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createPayroll } from "../../services/payrollService";

function CreatePayroll() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    empId: "",
    salary: "",
    payPeriodStart: "",
    payPeriodEnd: "",
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "empId") {
      const selectedEmployee = employees.find(
        (emp) => emp.id.toString() === value,
      );
      if (selectedEmployee) {
        setForm({
          ...form,
          empId: selectedEmployee.id,
          salary: selectedEmployee.salary,
        });
      }
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createPayroll(form);
      alert("Payroll Created Successfully");
      navigate("/admin/payroll");
    } catch (err) {
      console.error(err);
      alert("Payroll Creation Failed");
    }
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Create Payroll</h4>
      <div className="card shadow-sm p-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Employee</label>
              <select
                name="empId"
                className="form-select"
                value={form.empId}
                onChange={handleChange}
                required
              >
                <option value="">Select Employee</option>
                {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.firstName} {emp.lastName}
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
                readOnly
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Pay Period Start</label>
              <input
                type="date"
                name="payPeriodStart"
                className="form-control"
                value={form.payPeriodStart}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Pay Period End</label>
              <input
                type="date"
                name="payPeriodEnd"
                className="form-control"
                value={form.payPeriodEnd}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-warning">
              Create Payroll
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/admin/payroll")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePayroll;
