// src/components/admin/AdminDashboard.tsx
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container  p-3">
      <h2>Admin Dashboard</h2>
      <div className="row justify-center">
        
        <div className='col-md-3 col-12'>
          <Link to="/admin/add-projects" className="btn btn-success mb-3 w-100">
            Add New Project
          </Link>
        </div>

        <div className='col-md-3 col-12'>
          <Link to="/admin/list-projects" className="btn btn-primary mb-3 w-100">
            All Project
          </Link>
        </div>

      </div>

      {/* Other dashboard content */}
    </div >
  );
};

export default AdminDashboard;
