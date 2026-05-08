import { useEffect, useState } from "react";
import {
  getAllLeaves,
  approveLeave,
  rejectLeave,
} from "../../services/leaveService";
import { getEmployeeById } from "../../services/employeeService";

function LeaveList() {
  const [leaves, setLeaves] = useState([]);
  useEffect(() => {
    loadLeaves();
  }, []);

  const loadLeaves = async () => {
    try {
      const leaveRes = await getAllLeaves();
      const leaveData = leaveRes.data;

      const updatedLeaves = await Promise.all(
        leaveData.map(async (leave) => {
          try {
            const empRes = await getEmployeeById(leave.userId);
            return {
              ...leave,
              username:
                empRes.data.username ||
                empRes.data.name ||
                empRes.data.firstName ||
                "N/A",
            };
          } catch (err) {
            return {
              ...leave,
              username: "N/A",
            };
          }
        }),
      );

      setLeaves(updatedLeaves);
    } catch (err) {
      console.error(err);
    }
  };

  const handleApprove = async (leaveId) => {
    try {
      await approveLeave(leaveId);
      loadLeaves();
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async (leaveId) => {
    try {
      await rejectLeave(leaveId);
      loadLeaves();
    } catch (err) {
      console.error(err);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 0:
        return <span className="badge bg-warning text-dark">Pending</span>;
      case 1:
        return <span className="badge bg-success">Approved</span>;
      case 2:
        return <span className="badge bg-danger">Rejected</span>;
      default:
        return <span className="badge bg-secondary">Unknown</span>;
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatDateTime = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Manage Leave Requests</h4>
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>S.No</th>
                  <th>Username</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {leaves.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="text-center text-muted py-4">
                      No leave requests found.
                    </td>
                  </tr>
                ) : (
                  leaves.map((leave, index) => (
                    <tr key={leave.leaveId}>
                      <td>{index + 1}</td>
                      <td>{leave.username}</td>
                      <td>{formatDate(leave.startDate)}</td>
                      <td>{formatDate(leave.endDate)}</td>
                      <td>{leave.reason}</td>
                      <td>{getStatusBadge(leave.status)}</td>
                      <td>{formatDateTime(leave.createdAt)}</td>
                      <td>
                        {leave.status === 0 && (
                          <>
                            <button
                              className="btn btn-success btn-sm me-2"
                              onClick={() => handleApprove(leave.leaveId)}
                            >
                              Approve
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleReject(leave.leaveId)}
                            >
                              Reject
                            </button>
                          </>
                        )}
                        {leave.status === 1 && (
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleReject(leave.leaveId)}
                          >
                            Reject
                          </button>
                        )}
                        {leave.status === 2 && (
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleApprove(leave.leaveId)}
                          >
                            Approve
                          </button>
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

export default LeaveList;
