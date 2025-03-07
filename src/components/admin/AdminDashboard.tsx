// src/components/admin/AdminDashboard.tsx
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <Link to="/admin/add-projects" className="btn btn-success">
        Add New Project
      </Link>
      {/* Other dashboard content */}
    </div>
  );
};

export default AdminDashboard;
