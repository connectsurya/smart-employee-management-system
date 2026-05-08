function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-5">
      <h2>Welcome {user?.firstName} 👋</h2>
      <p>Email: {user?.email}</p>
      <p>Department: {user?.department}</p>
    </div>
  );
}

export default Dashboard;
