import { useState } from "react";
import { addDepartment } from "../../services/departmentService";
import { useNavigate } from "react-router-dom";

function AddDepartment() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDepartment({ name });
      alert("Department Added");
      navigate("/admin/departments");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Add Department</h4>
      <div className="card shadow-sm p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Department Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button className="btn btn-warning">Add Department</button>
        </form>
      </div>
    </div>
  );
}

export default AddDepartment;
