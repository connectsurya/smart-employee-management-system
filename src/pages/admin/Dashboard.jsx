import { Card, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const loginUser = JSON.parse(localStorage.getItem("user"));
  const [employeeCount, setEmployeeCount] = useState(0);
  const [departmentCount, setDepartmentCount] = useState(0);
  const [leaveTodayCount, setLeaveTodayCount] = useState(0);
  const [pendingApprovalCount, setPendingApprovalCount] = useState(0);
  const [presentTodayCount, setPresentTodayCount] = useState(0);
  const [announcementCount, setAnnouncementCount] = useState(0);
  const [approvedLeaveCount, setApprovedLeaveCount] = useState(0);
  const [pendingPayrollCount, setPendingPayrollCount] = useState(0);

  useEffect(() => {
    const now = new Date();

    const formattedDate = now.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    setDate(formattedDate);
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [empRes, deptRes, leaveRes, annRes, payrollRes] = await Promise.all(
        [
          axios.get("http://localhost:8081/api/employees"),
          axios.get("http://localhost:8081/api/departments"),
          axios.get("http://localhost:8081/api/leaves"),
          axios.get("http://localhost:8081/api/announcements"),
          axios.get("http://localhost:8081/api/payroll"),
        ],
      );

      const employees = empRes.data;
      const departments = deptRes.data;
      const leaves = leaveRes.data;
      const announcements = annRes.data;
      const payrolls = payrollRes.data;
      const today = new Date().toISOString().split("T")[0];
      const employeeOnly = employees.filter((e) => e.role === "EMPLOYEE");
      setEmployeeCount(employeeOnly.length);
      setDepartmentCount(departments.length);

      const leaveToday = leaves.filter((leave) => {
        if (leave.status !== 1) {
          return false;
        }
        return today >= leave.startDate && today <= leave.endDate;
      });
      setLeaveTodayCount(leaveToday.length);
      const pendingLeaves = leaves.filter((leave) => leave.status === 0);
      setPendingApprovalCount(pendingLeaves.length);
      const approvedLeaves = leaves.filter((leave) => leave.status === 1);
      setApprovedLeaveCount(approvedLeaves.length);
      const leaveUserIds = leaveToday.map((leave) => leave.userId);
      const uniqueLeaveUsers = [...new Set(leaveUserIds)];
      const presentCount = employeeOnly.length - uniqueLeaveUsers.length;
      setPresentTodayCount(presentCount);
      setAnnouncementCount(announcements.length);

      const pendingPayrolls = payrolls.filter(
        (payroll) => payroll.status === 0,
      );
      setPendingPayrollCount(pendingPayrolls.length);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div
        className="
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <h4 className="fw-bold mb-0">
          Welcome <span className="text-primary">{loginUser?.username}</span> (
          {loginUser?.role})
          <span
            className="
              text-primary
              ms-3
              fs-6
              fw-semibold
            "
          >
            {date}
          </span>
        </h4>
      </div>

      <p className="text-muted">
        Here's what's happening with your team today.
      </p>
      <Row className="g-4 mt-2">
        <Col md={3}>
          <Card
            className="
              p-3
              bg-warning
              text-white
              rounded-4
            "
          >
            <h6>Total Employees</h6>
            <h3>{employeeCount}</h3>
            <Button
              size="sm"
              variant="light"
              onClick={() => navigate("/admin/employees")}
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
            "
          >
            <h6>On Leave Today</h6>
            <h3>{leaveTodayCount}</h3>
            <Button
              size="sm"
              variant="light"
              onClick={() => navigate("/admin/leave")}
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
            "
          >
            <h6>Total Departments</h6>
            <h3>{departmentCount}</h3>
            <Button
              size="sm"
              variant="light"
              onClick={() => navigate("/admin/departments")}
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
            "
          >
            <h6>Pending Approvals</h6>
            <h3>{pendingApprovalCount}</h3>
            <Button
              size="sm"
              variant="light"
              onClick={() => navigate("/admin/leave")}
            >
              View List
            </Button>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mt-3">
        <Col md={3}>
          <Card className="p-3 rounded-4">
            <h6>Present Today</h6>
            <h4>{presentTodayCount}</h4>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 rounded-4">
            <h6>Total Announcements</h6>
            <h4>{announcementCount}</h4>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 rounded-4">
            <h6>Approved Leave</h6>
            <h4>{approvedLeaveCount}</h4>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="p-3 rounded-4">
            <h6>Pending Payrolls</h6>
            <h4>{pendingPayrollCount}</h4>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
