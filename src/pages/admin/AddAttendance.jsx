import { useEffect, useState } from "react";
import { addAttendance } from "../../services/attendanceService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddAttendance() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    empId: "",
    attendanceDate: "",
    clockIn: "",
    clockOut: "",
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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addAttendance(form);
      alert("Attendance Added Successfully");
      navigate("/admin/attendance");
    } catch (err) {
      console.error(err);
      alert("Failed to Add Attendance");
    }
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Add Attendance Record</h4>
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
              <label className="form-label">Date</label>
              <input
                type="date"
                name="attendanceDate"
                className="form-control"
                value={form.attendanceDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Clock In</label>
              <input
                type="time"
                name="clockIn"
                className="form-control"
                value={form.clockIn}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Clock Out</label>
              <input
                type="time"
                name="clockOut"
                className="form-control"
                value={form.clockOut}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-warning">
              Submit
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/admin/attendance")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAttendance;
