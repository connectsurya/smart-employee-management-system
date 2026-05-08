import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div
      className="bg-white shadow-sm p-3"
      style={{ width: "260px", minHeight: "100vh" }}
    >
      <h5 className="fw-bold text-warning">
        Employee <br /> Management System
      </h5>
      <hr />
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link className="nav-link fw-semibold" to="/admin/dashboard">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <button
            className="nav-link btn w-100 text-start fw-semibold"
            onClick={() => toggleMenu("employees")}
          >
            Employees
          </button>

          {openMenu === "employees" && (
            <ul className="list-unstyled small">
              <li>
                <Link className="nav-link ms-3" to="/admin/employees">
                  View Employees
                </Link>
              </li>
              <li>
                <Link className="nav-link ms-3" to="/admin/employees/add">
                  Add Employee
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <button
            className="nav-link btn w-100 text-start fw-semibold"
            onClick={() => toggleMenu("departments")}
          >
            Departments
          </button>

          {openMenu === "departments" && (
            <ul className="list-unstyled small">
              <li>
                <Link className="nav-link ms-3" to="/admin/departments">
                  View Departments
                </Link>
              </li>
              <li>
                <Link className="nav-link ms-3" to="/admin/departments/add">
                  Add Department
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <button
            className="nav-link btn w-100 text-start fw-semibold"
            onClick={() => toggleMenu("leave")}
          >
            Leave Management
          </button>

          {openMenu === "leave" && (
            <ul className="list-unstyled small">
              <li>
                <Link className="nav-link ms-3" to="/admin/leave">
                  Manage Leave
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <button
            className="nav-link btn w-100 text-start fw-semibold"
            onClick={() => toggleMenu("payroll")}
          >
            Payroll
          </button>

          {openMenu === "payroll" && (
            <ul className="list-unstyled small">
              <li>
                <Link className="nav-link ms-3" to="/admin/payroll">
                  Manage Payroll
                </Link>
              </li>
              <li>
                <Link className="nav-link ms-3" to="/admin/payroll/create">
                  Create Payroll
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <button
            className="nav-link btn w-100 text-start fw-semibold"
            onClick={() => toggleMenu("attendance")}
          >
            Attendance
          </button>

          {openMenu === "attendance" && (
            <ul className="list-unstyled small">
              <li>
                <Link className="nav-link ms-3" to="/admin/attendance">
                  Manage Attendance
                </Link>
              </li>
              <li>
                <Link className="nav-link ms-3" to="/admin/attendance/add">
                  Add Attendance
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item">
          <button
            className="nav-link btn w-100 text-start fw-semibold"
            onClick={() => toggleMenu("announcement")}
          >
            Announcements
          </button>

          {openMenu === "announcement" && (
            <ul className="list-unstyled small">
              <li>
                <Link className="nav-link ms-3" to="/admin/announcements">
                  View Announcements
                </Link>
              </li>
              <li>
                <Link className="nav-link ms-3" to="/admin/announcements/add">
                  Add Announcement
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
