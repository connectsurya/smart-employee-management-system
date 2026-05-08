import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../../services/employeeService";
import { useNavigate } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure want to delete?");
    if (!confirmDelete) return;

    try {
      await deleteEmployee(id);
      alert("Employee Deleted Successfully");
      loadEmployees();
    } catch (err) {
      console.error(err);
      alert("Delete Failed");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/employees/edit/${id}`);
  };
  const getRoleBadge = (role) => {
    if (role === "ADMIN") {
      return <span className="badge bg-success">ADMIN</span>;
    }
    return <span className="badge bg-primary">EMPLOYEE</span>;
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">View Employees</h4>
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="
                table
                table-hover
                table-bordered
                align-middle
              "
            >
              <thead className="table-dark">
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Experience</th>
                  <th>Salary</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {employees.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="
                        text-center
                        text-muted
                        py-4
                      "
                    >
                      No Employees Found
                    </td>
                  </tr>
                ) : (
                  employees.map((emp, index) => (
                    <tr key={emp.id}>
                      <td>{index + 1}</td>
                      <td>
                        {emp.firstName} {emp.lastName}
                      </td>
                      <td>{emp.email}</td>
                      <td>{emp.department}</td>
                      <td>{emp.experience} Years</td>
                      <td>₹ {emp.salary}</td>
                      <td>{getRoleBadge(emp.role)}</td>
                      <td>
                        <button
                          className="
                            btn
                            btn-sm
                            btn-primary
                            me-2
                          "
                          onClick={() => handleEdit(emp.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="
                            btn
                            btn-sm
                            btn-danger
                          "
                          onClick={() => handleDelete(emp.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
