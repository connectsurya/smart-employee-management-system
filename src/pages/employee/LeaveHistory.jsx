import { useEffect, useState } from "react";
import { getLeaveHistory } from "../../services/leaveService";

function LeaveHistory() {
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const response = await getLeaveHistory(user.id);
      setLeaves(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    if (status === 0) {
      return <span className="badge bg-warning text-dark">Pending</span>;
    }
    if (status === 1) {
      return <span className="badge bg-success">Approved</span>;
    }
    return <span className="badge bg-danger">Rejected</span>;
  };

  const formatDate = (date) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <div
        className="
          d-flex
          justify-content-between
          align-items-center
          mb-4
        "
      >
        <h3 className="fw-bold mb-0">Leave History</h3>
      </div>
      <div className="table-responsive">
        <table
          className="
            table
            table-bordered
            align-middle
          "
        >
          <thead className="table-dark">
            <tr>
              <th>S.No</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="5"
                  className="
                    text-center
                    py-4
                  "
                >
                  Loading...
                </td>
              </tr>
            ) : leaves.length > 0 ? (
              leaves.map((leave, index) => (
                <tr key={leave.leaveId}>
                  <td>{index + 1}</td>
                  <td>{formatDate(leave.startDate)}</td>
                  <td>{formatDate(leave.endDate)}</td>
                  <td>{leave.reason}</td>
                  <td>{getStatusBadge(leave.status)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="
                    text-center
                    text-muted
                    py-4
                  "
                >
                  No leave requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaveHistory;
