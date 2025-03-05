// src/components/admin/AdminDashboard.tsx
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <Link to="/admin/add-blog" className="btn btn-success">
        Add New Blog Post
      </Link>
      {/* Other dashboard content */}
    </div>
  );
};

export default AdminDashboard;
