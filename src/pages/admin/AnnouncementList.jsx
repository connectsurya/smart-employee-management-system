import { useEffect, useState } from "react";
import {
  getAnnouncements,
  deleteAnnouncement,
} from "../../services/announcementService";
import { useNavigate } from "react-router-dom";

function AnnouncementList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await getAnnouncements();
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure want to delete?");
    if (!confirmDelete) return;

    try {
      await deleteAnnouncement(id);
      alert("Announcement Deleted Successfully");
      loadData();
    } catch (err) {
      console.error(err);
      alert("Delete Failed");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/announcements/edit/${id}`);
  };

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="container-fluid">
      <h4 className="fw-bold mb-3">Manage Announcements</h4>
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
                  <th>Title</th>
                  <th>Content</th>
                  <th>Created At</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td
                      colSpan="5"
                      className="
                        text-center
                        text-muted
                        py-4
                      "
                    >
                      No announcements found.
                    </td>
                  </tr>
                ) : (
                  data.map((a, index) => (
                    <tr key={a.id}>
                      <td>{index + 1}</td>
                      <td>{a.title}</td>
                      <td>{a.content}</td>
                      <td>{formatDate(a.createdAt)}</td>
                      <td>
                        <button
                          className="
                            btn
                            btn-sm
                            btn-primary
                            me-2
                          "
                          onClick={() => handleEdit(a.id)}
                        >
                          Edit
                        </button>

                        <button
                          className="
                            btn
                            btn-sm
                            btn-danger
                          "
                          onClick={() => handleDelete(a.id)}
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

export default AnnouncementList;
