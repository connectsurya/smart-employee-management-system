import { useEffect, useState } from "react";
import { getAttendance } from "../../services/attendanceService";
import axios from "axios";

function AttendanceList() {
  const [records, setRecords] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadAttendance();
    loadEmployees();
  }, []);

  const loadAttendance = async () => {
    try {
      const res = await getAttendance();
      setRecords(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const loadEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getEmployeeName = (empId) => {
    const employee = employees.find(
      (emp) => emp.id.toString() === empId.toString(),
    );
    return employee ? `${employee.firstName} ${employee.lastName}` : "Unknown";
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Manage Attendance</h4>
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="
                table
                table-hover
                table-bordered
                align-middle
              "
            >
              <thead className="table-dark">
                <tr>
                  <th>S.No</th>
                  <th>Employee</th>
                  <th>Date</th>
                  <th>Clock In</th>
                  <th>Clock Out</th>
                </tr>
              </thead>

              <tbody>
                {records.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="
                        text-center
                        text-muted
                        py-4
                      "
                    >
                      No attendance records found.
                    </td>
                  </tr>
                ) : (
                  records.map((r, index) => (
                    <tr key={r.id}>
                      <td>{index + 1}</td>
                      <td>{getEmployeeName(r.empId)}</td>
                      <td>{formatDate(r.attendanceDate)}</td>
                      <td>{r.clockIn || "-"}</td>
                      <td>{r.clockOut || "-"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceList;
