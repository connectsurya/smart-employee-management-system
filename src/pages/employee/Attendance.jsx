import { useEffect, useState } from "react";
import {
  clockIn,
  clockOut,
  getAttendance,
} from "../../services/employeeAttendanceService";

function Attendance() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [attendance, setAttendance] = useState([]);
  const [todayAttendance, setTodayAttendance] = useState(null);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const response = await getAttendance(user.id);
      setAttendance(response.data);
      const today = new Date().toISOString().split("T")[0];

      const todayData = response.data.find(
        (item) => item.attendanceDate === today,
      );
      setTodayAttendance(todayData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClockIn = async () => {
    try {
      await clockIn(user.id);
      alert("Clock In Successful");
      fetchAttendance();
    } catch (error) {
      console.log(error);
      alert("Already Clocked In Today");
    }
  };

  const handleClockOut = async () => {
    try {
      await clockOut(todayAttendance.attendanceId);
      alert("Clock Out Successful");
      fetchAttendance();
    } catch (error) {
      console.log(error);
      alert("Clock Out Failed");
    }
  };

  const formatDate = (date) => {
    if (!date) return "--";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = (dateTime) => {
    if (!dateTime) return "--";

    return new Date(dateTime).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h3 className="fw-bold mb-4">My Attendance</h3>
      <div className="mb-4">
        <button
          className="
            btn
            btn-success
            me-2
          "
          onClick={handleClockIn}
          disabled={todayAttendance}
        >
          Clock In
        </button>

        <button
          className="btn btn-danger"
          onClick={handleClockOut}
          disabled={!todayAttendance || todayAttendance.clockOut}
        >
          Clock Out
        </button>
      </div>

      <div className="table-responsive">
        <table
          className="
            table
            table-bordered
            table-hover
            align-middle"
        >
          <thead className="table-dark">
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Clock In</th>
              <th>Clock Out</th>
            </tr>
          </thead>

          <tbody>
            {attendance.length > 0 ? (
              attendance.map((item, index) => (
                <tr key={item.attendanceId}>
                  <td>{index + 1}</td>
                  <td>{formatDate(item.attendanceDate)}</td>
                  <td>{formatTime(item.clockIn)}</td>
                  <td>{formatTime(item.clockOut)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="
                    text-center
                    py-4
                  "
                >
                  No Attendance Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
