import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.css";

function AdminLayout() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Topbar />
        <div className="p-4 bg-light min-vh-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
