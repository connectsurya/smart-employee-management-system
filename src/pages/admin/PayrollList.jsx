import { useEffect, useState } from "react";
import {
  getPayrolls,
  updatePayrollStatus,
} from "../../services/payrollService";
import axios from "axios";

function PayrollList() {
  const [payrolls, setPayrolls] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadPayrolls();
    loadEmployees();
  }, []);

  const loadPayrolls = async () => {
    try {
      const res = await getPayrolls();
      setPayrolls(res.data);
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

  const getStatusBadge = (status) => {
    switch (status) {
      case 0:
        return (
          <span className="badge bg-warning text-dark">Payment Processing</span>
        );
      case 1:
        return <span className="badge bg-success">Payment Successful</span>;
      default:
        return <span className="badge bg-secondary">Unknown</span>;
    }
  };

  const handleProcessPayment = async (id) => {
    try {
      await updatePayrollStatus(id);
      alert("Payment Processed Successfully");
      loadPayrolls();
    } catch (err) {
      console.error(err);
      alert("Payment Processing Failed");
    }
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Manage Payroll</h4>
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
                  <th>Salary</th>
                  <th>Pay Period Start</th>
                  <th>Pay Period End</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {payrolls.length === 0 ? (
                  <tr>
                    <td
                      colSpan="7"
                      className="
                        text-center
                        text-muted
                        py-4
                      "
                    >
                      No payroll records found.
                    </td>
                  </tr>
                ) : (
                  payrolls.map((p, index) => (
                    <tr key={p.id}>
                      <td>{index + 1}</td>
                      <td>{getEmployeeName(p.empId)}</td>
                      <td>₹ {p.salary}</td>
                      <td>{formatDate(p.payPeriodStart)}</td>
                      <td>{formatDate(p.payPeriodEnd)}</td>
                      <td>{getStatusBadge(p.status)}</td>
                      <td>
                        {p.status === 0 ? (
                          <button
                            className="
                              btn
                              btn-success
                              btn-sm
                            "
                            onClick={() => handleProcessPayment(p.id)}
                          >
                            Process Payment
                          </button>
                        ) : (
                          <span
                            className="
                              text-success
                              fw-semibold
                            "
                          >
                            Paid
                          </span>
                        )}
                      </td>
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

export default PayrollList;
