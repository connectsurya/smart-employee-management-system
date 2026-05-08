import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function EmployeeSidebar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState("");
  const activeStyle = { fontWeight: "600" };

  const toggleMenu = (menu) => {
    if (openMenu === menu) {
      setOpenMenu("");
    } else {
      setOpenMenu(menu);
    }
  };

  return (
    <div
      className="bg-white border-end"
      style={{ width: "260px", minHeight: "100vh" }}
    >
      <div className="px-4 py-4 border-bottom">
        <h4
          className="fw-bold lh-sm"
          style={{ color: "#ff7a00", fontSize: "20px" }}
        >
          Employee Management System
        </h4>
      </div>

      <div className="px-3 mt-2 mb-1 text-uppercase small fw-bold text-secondary">
        Main
      </div>

      <ul className="list-unstyled px-2">
        <li className="mb-0">
          <Link
            to="/employee/dashboard"
            className="nav-link rounded p-2 d-flex align-items-center"
            style={
              location.pathname === "/employee/dashboard" ? activeStyle : {}
            }
          >
            <i className="bi bi-grid me-3"></i>
            Dashboard
          </Link>
        </li>

        <li className="mb-0">
          <div
            className="nav-link rounded p-2 d-flex justify-content-between align-items-center"
            style={{
              cursor: "pointer",
              ...(location.pathname.includes("/employee/leave") ||
              location.pathname.includes("/employee/apply-leave")
                ? activeStyle
                : {}),
            }}
            onClick={() => toggleMenu("leave")}
          >
            <div>
              <i className="bi bi-calendar-check me-3"></i>
              Leave Management
            </div>

            <i
              className={`bi ${
                openMenu === "leave" ? "bi-chevron-down" : "bi-chevron-right"
              }`}
            ></i>
          </div>

          {openMenu === "leave" && (
            <ul className="list-unstyled ms-4">
              <li>
                <Link
                  to="/employee/leave-history"
                  className="nav-link rounded p-2"
                  style={
                    location.pathname === "/employee/leave-history"
                      ? activeStyle
                      : {}
                  }
                >
                  Leave History
                </Link>
              </li>

              <li>
                <Link
                  to="/employee/apply-leave"
                  className="nav-link rounded p-2"
                  style={
                    location.pathname === "/employee/apply-leave"
                      ? activeStyle
                      : {}
                  }
                >
                  Apply Leave
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="mb-1">
          <div
            className="nav-link rounded p-2 d-flex justify-content-between align-items-center"
            style={{
              cursor: "pointer",
              ...(location.pathname.includes("/employee/payslips")
                ? activeStyle
                : {}),
            }}
            onClick={() => toggleMenu("payroll")}
          >
            <div>
              <i className="bi bi-cash me-3"></i>
              Payroll
            </div>
            <i
              className={`bi ${
                openMenu === "payroll" ? "bi-chevron-down" : "bi-chevron-right"
              }`}
            ></i>
          </div>

          {openMenu === "payroll" && (
            <ul className="list-unstyled ms-4">
              <li>
                <Link
                  to="/employee/payslips"
                  className="nav-link rounded p-2"
                  style={
                    location.pathname === "/employee/payslips"
                      ? activeStyle
                      : {}
                  }
                >
                  My Payslips
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="mb-1">
          <Link
            to="/employee/attendance"
            className="nav-link rounded p-2 d-flex align-items-center justify-content-between"
            style={
              location.pathname === "/employee/attendance" ? activeStyle : {}
            }
          >
            <div>
              <i className="bi bi-clock me-3"></i>
              Attendance
            </div>
            <i className="bi bi-chevron-right"></i>
          </Link>
        </li>

        <li className="mb-1">
          <Link
            to="/employee/announcements"
            className="nav-link rounded p-2 d-flex align-items-center justify-content-between"
            style={
              location.pathname === "/employee/announcements" ? activeStyle : {}
            }
          >
            <div>
              <i className="bi bi-megaphone me-3"></i>
              Announcements
            </div>
            <i className="bi bi-chevron-right"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default EmployeeSidebar;
