import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { getPayslips } from "../../services/payrollService";

function Payslips() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  const [payslips, setPayslips] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchPayslips();
    }
  }, [userId]);

  const fetchPayslips = async () => {
    try {
      const response = await getPayslips(userId);

      setPayslips(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusBadge = (status) => {
    if (status === 1) {
      return <span className="badge bg-success">Paid</span>;
    }
    return <span className="badge bg-warning text-dark">Pending</span>;
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const downloadPayslip = (payslip) => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Employee Management System", 20, 20);
    doc.setFontSize(14);
    doc.text(`Employee ID : ${payslip.empId}`, 20, 40);
    doc.text(`Employee Name : ${user?.firstName} ${user?.lastName}`, 20, 55);
    doc.text(`Salary : ₹${payslip.salary}`, 20, 70);
    doc.text(
      `Pay Period Start : ${formatDate(payslip.payPeriodStart)}`,
      20,
      85,
    );
    doc.text(`Pay Period End : ${formatDate(payslip.payPeriodEnd)}`, 20, 100);
    doc.text(`Status : ${payslip.status === 1 ? "Paid" : "Pending"}`, 20, 115);
    doc.text(`Generated Date : ${formatDate(new Date())}`, 20, 130);
    doc.save(`Payslip-${payslip.id}.pdf`);
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h3 className="fw-bold mb-4">My Payslips</h3>
      <div className="table-responsive">
        <table
          className="
            table
            table-bordered
            table-hover
            align-middle
          "
        >
          <thead className="table-dark">
            <tr>
              <th>S.No</th>
              <th>Pay Period</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {payslips.length > 0 ? (
              payslips.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    {formatDate(item.payPeriodStart)} to{" "}
                    {formatDate(item.payPeriodEnd)}
                  </td>
                  <td>₹{item.salary}</td>
                  <td>{getStatusBadge(item.status)}</td>
                  <td>
                    <button
                      className="
                        btn
                        btn-sm
                        btn-primary
                      "
                      onClick={() => downloadPayslip(item)}
                    >
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="
                    text-center
                    py-4
                  "
                >
                  No Payslips Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payslips;
