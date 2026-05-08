import { useState } from "react";
import { addAnnouncement } from "../../services/announcementService";
import { useNavigate } from "react-router-dom";

function AddAnnouncement() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAnnouncement(form);
      alert("Announcement Added Successfully");
      navigate("/admin/announcements");
    } catch (err) {
      console.error(err);
      alert("Failed to Add Announcement");
    }
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Add New Announcement</h4>
      <div className="card shadow-sm p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Content</label>
            <textarea
              name="content"
              className="form-control"
              rows="4"
              value={form.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-warning">
              Submit
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/admin/announcements")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAnnouncement;
