import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import EmployeeList from "./pages/admin/EmployeeList";
import AddEmployee from "./pages/admin/AddEmployee";
import EditEmployee from "./pages/admin/EditEmployee";
import DepartmentList from "./pages/admin/DepartmentList";
import AddDepartment from "./pages/admin/AddDepartment";
import EditDepartment from "./pages/admin/EditDepartment";
import LeaveList from "./pages/admin/LeaveList";
import PayrollList from "./pages/admin/PayrollList";
import CreatePayroll from "./pages/admin/CreatePayroll";
import AttendanceList from "./pages/admin/AttendanceList";
import AddAttendance from "./pages/admin/AddAttendance";
import AnnouncementList from "./pages/admin/AnnouncementList";
import AddAnnouncement from "./pages/admin/AddAnnouncement";
import EditAnnouncement from "./pages/admin/EditAnnouncement";
import EmployeeLayout from "./layouts/EmployeeLayout";
import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import LeaveHistory from "./pages/employee/LeaveHistory";
import ApplyLeave from "./pages/employee/ApplyLeave";
import Payslips from "./pages/employee/Payslips";
import Attendance from "./pages/employee/Attendance";
import Announcements from "./pages/employee/Announcements";

function App() {
  const location = useLocation();

  const isDashboardRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/employee");

  const hideFooterRoutes = ["/login", "/signup"];

  const shouldHideFooter =
    isDashboardRoute ||
    hideFooterRoutes.some((path) => location.pathname.startsWith(path));

  return (
    <>
      {!isDashboardRoute && <CustomNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employee" element={<EmployeeLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<EmployeeDashboard />} />
          <Route path="leave-history" element={<LeaveHistory />} />
          <Route path="apply-leave" element={<ApplyLeave />} />
          <Route path="payslips" element={<Payslips />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="announcements" element={<Announcements />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="employees/add" element={<AddEmployee />} />
          <Route path="employees/edit/:id" element={<EditEmployee />} />
          <Route path="departments" element={<DepartmentList />} />
          <Route path="departments/add" element={<AddDepartment />} />
          <Route path="departments/edit/:id" element={<EditDepartment />} />
          <Route path="leave" element={<LeaveList />} />
          <Route path="payroll" element={<PayrollList />} />
          <Route path="payroll/create" element={<CreatePayroll />} />
          <Route path="attendance" element={<AttendanceList />} />
          <Route path="attendance/add" element={<AddAttendance />} />
          <Route path="announcements" element={<AnnouncementList />} />
          <Route path="announcements/add" element={<AddAnnouncement />} />
          <Route path="announcements/edit/:id" element={<EditAnnouncement />} />
        </Route>

        <Route
          path="*"
          element={
            <div className="text-center mt-5">
              <h1>404</h1>
              <p>Page Not Found</p>
            </div>
          }
        />
      </Routes>

      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default App;
