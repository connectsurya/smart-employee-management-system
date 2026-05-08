import React, { useEffect, useState } from "react";
import { getAnnouncements } from "../../services/announcementService";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const res = await getAnnouncements();
      setAnnouncements(res.data);
    } catch (err) {
      console.error("Error fetching announcements:", err);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h3 className="fw-bold mb-4">Announcements</h3>
      {announcements.length === 0 ? (
        <p className="text-muted">No announcements available</p>
      ) : (
        announcements.map((item) => (
          <div key={item.id} className="card border-0 shadow-sm mb-3">
            <div className="card-body">
              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted mb-1">{item.content}</p>
              <small className="text-secondary">
                {new Date(item.created_at).toLocaleString()}
              </small>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Announcements;
