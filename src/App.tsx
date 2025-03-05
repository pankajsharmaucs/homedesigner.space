// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Services from './components/common/Services';
import About from './components/common/About';
import Products from './components/common/Products';
import Contact from './components/common/Contact';
import AddProjects from './components/admin/AddProjects';
import ProjectList from './components/projects/ProjectList';
import ProjectDetail from './components/projects/ProjectDetail';


const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/projects" element={<ProjectList />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-projects" element={< AddProjects />} /> {/* new route */}
          </Routes>
      <Footer />
    </Router>
  );
};

export default App;
