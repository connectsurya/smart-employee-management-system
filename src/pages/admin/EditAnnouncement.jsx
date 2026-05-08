import { useEffect, useState } from "react";
import {
  getAnnouncementById,
  updateAnnouncement,
} from "../../services/announcementService";
import { useNavigate, useParams } from "react-router-dom";

function EditAnnouncement() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    loadAnnouncement();
  }, []);

  const loadAnnouncement = async () => {
    try {
      const res = await getAnnouncementById(id);
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
      await updateAnnouncement(id, form);
      alert("Announcement Updated");
      navigate("/admin/announcements");
    } catch (err) {
      console.error(err);
      alert("Update Failed");
    }
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Edit Announcement</h4>
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
              Update
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

export default EditAnnouncement;
