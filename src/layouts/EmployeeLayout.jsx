import React from "react";
import EmployeeSidebar from "../components/EmployeeSidebar";
import EmployeeTopbar from "../components/EmployeeTopbar";
import { Outlet } from "react-router-dom";

function EmployeeLayout() {
  return (
    <div className="d-flex">
      <EmployeeSidebar />
      <div className="flex-grow-1">
        <EmployeeTopbar />
        <div
          className="p-4"
          style={{
            minHeight: "100vh",
            background: "#f4f6f9",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default EmployeeLayout;
