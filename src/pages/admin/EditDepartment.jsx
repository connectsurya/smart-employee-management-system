import { useEffect, useState } from "react";
import {
  getDepartmentById,
  updateDepartment,
} from "../../services/departmentService";
import { useNavigate, useParams } from "react-router-dom";

function EditDepartment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
  });

  useEffect(() => {
    loadDepartment();
  }, []);

  const loadDepartment = async () => {
    try {
      const res = await getDepartmentById(id);
      setForm(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDepartment(id, form);
      alert("Department Updated Successfully");
      navigate("/admin/departments");
    } catch (err) {
      console.error(err);
      alert("Update Failed");
    }
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Edit Department</h4>
      <div className="card shadow-sm p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Department Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-warning">
              Update Department
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/admin/departments")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditDepartment;
