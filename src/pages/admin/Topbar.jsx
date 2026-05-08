import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const firstLetter = user?.firstName
    ? user.firstName.charAt(0).toUpperCase()
    : "A";

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className="
        d-flex
        justify-content-between
        align-items-center
        p-3
        bg-white
        shadow-sm
      "
    >
      <h5 className="mb-0">☰</h5>
      <div className="d-flex align-items-center">
        <button
          className="btn btn-warning me-2"
          onClick={() => navigate("/admin/employees/add")}
        >
          + Add New Employee
        </button>
        <button className="btn btn-danger me-3" onClick={handleLogout}>
          Logout
        </button>
        <span
          className="
            badge
            bg-secondary
            rounded-circle
            d-flex
            align-items-center
            justify-content-center
          "
          style={{
            width: "45px",
            height: "45px",
            fontSize: "18px",
          }}
        >
          {firstLetter}
        </span>
      </div>
    </div>
  );
}

export default Topbar;
