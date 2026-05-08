import { useEffect, useState } from "react";
import {
  getDepartments,
  deleteDepartment,
} from "../../services/departmentService";
import { useNavigate } from "react-router-dom";

function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    try {
      const res = await getDepartments();
      setDepartments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure want to delete?");
    if (!confirmDelete) return;

    try {
      await deleteDepartment(id);
      alert("Department Deleted Successfully");
      loadDepartments();
    } catch (err) {
      console.error(err);
      alert("Delete Failed");
    }
  };
  const handleEdit = (id) => {
    navigate(`/admin/departments/edit/${id}`);
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">View Departments</h4>
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
                  <th>Department Name</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {departments.length === 0 ? (
                  <tr>
                    <td
                      colSpan="3"
                      className="
                        text-center
                        text-muted
                        py-4
                      "
                    >
                      No departments found.
                    </td>
                  </tr>
                ) : (
                  departments.map((dept, index) => (
                    <tr key={dept.deptId}>
                      <td>{index + 1}</td>
                      <td>{dept.name}</td>
                      <td>
                        <button
                          className="
                            btn
                            btn-sm
                            btn-primary
                            me-2
                          "
                          onClick={() => handleEdit(dept.deptId)}
                        >
                          Edit
                        </button>

                        <button
                          className="
                            btn
                            btn-sm
                            btn-danger
                          "
                          onClick={() => handleDelete(dept.deptId)}
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

export default DepartmentList;
