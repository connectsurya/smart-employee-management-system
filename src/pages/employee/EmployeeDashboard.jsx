import { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EmployeeDashboard() {
  const navigate = useNavigate();
  const loginUser = JSON.parse(localStorage.getItem("user"));
  const [date, setDate] = useState("");
  const [dashboard, setDashboard] = useState({});

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    setDate(formattedDate);
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/dashboard/employee/1",
      );

      setDashboard(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <div
        className="
          d-flex
          justify-content-between
          align-items-center
          flex-wrap
        "
      >
        <div>
          <h4 className="fw-bold mb-1">
            Welcome{" "}
            <span className="text-primary">{dashboard.employeeName}</span>
          </h4>

          <p className="text-muted mb-0">
            Here's a summary of your activities.
          </p>
        </div>

        <div
          className="
            text-primary
            fw-semibold
            mt-2 mt-md-0
          "
        >
          {date}
        </div>
      </div>

      <Row className="g-4 mt-2">
        <Col md={3}>
          <Card
            className="
              p-3
              bg-warning
              text-white
              rounded-4
              border-0
              shadow-sm
              h-100
            "
          >
            <h6>Pending Leaves</h6>
            <h2 className="fw-bold">{dashboard.pendingLeaves}</h2>
            <Button
              size="sm"
              variant="light"
              className="mt-2"
              onClick={() => navigate("/employee/leave-history")}
            >
              View List
            </Button>
          </Card>
        </Col>

        <Col md={3}>
          <Card
            className="
              p-3
              bg-success
              text-white
              rounded-4
              border-0
              shadow-sm
              h-100
            "
          >
            <h6>Approved Leaves</h6>
            <h2 className="fw-bold">{dashboard.approvedLeaves}</h2>
            <Button
              size="sm"
              variant="light"
              className="mt-2"
              onClick={() => navigate("/employee/leave-history")}
            >
              View List
            </Button>
          </Card>
        </Col>

        <Col md={3}>
          <Card
            className="
              p-3
              bg-primary
              text-white
              rounded-4
              border-0
              shadow-sm
              h-100
            "
          >
            <h6>Attendance</h6>
            <h2 className="fw-bold">{dashboard.attendanceCount}</h2>
            <small>This Month</small>
            <Button
              size="sm"
              variant="light"
              className="mt-2"
              onClick={() => navigate("/employee/attendance")}
            >
              View List
            </Button>
          </Card>
        </Col>

        <Col md={3}>
          <Card
            className="
              p-3
              bg-info
              text-white
              rounded-4
              border-0
              shadow-sm
              h-100
            "
          >
            <h6>Announcements</h6>
            <h2 className="fw-bold">{dashboard.announcementsCount}</h2>
            <Button
              size="sm"
              variant="light"
              className="mt-2"
              onClick={() => navigate("/employee/announcements")}
            >
              View List
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default EmployeeDashboard;
