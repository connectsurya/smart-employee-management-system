import { Link, useNavigate } from "react-router-dom";

function EmployeeTopbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.firstName || "U";
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="bg-white border-bottom px-4 py-3">
      <div className="d-flex justify-content-end align-items-center">
        <Link
          to="/employee/apply-leave"
          className="btn btn-warning text-white me-3"
        >
          + Apply Leave
        </Link>

        <button className="btn btn-danger me-3" onClick={handleLogout}>
          Logout
        </button>
        <i className="bi bi-bell fs-5 me-3"></i>
        <div className="d-flex align-items-center">
          <div
            className="rounded-circle bg-warning text-white d-flex justify-content-center align-items-center fw-bold me-2"
            style={{
              width: "40px",
              height: "40px",
              fontSize: "18px",
            }}
          >
            {userName.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeTopbar;
