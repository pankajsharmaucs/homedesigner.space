// src/components/Header.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen); // Toggle the navbar state
  };

  const handleMenuItemClick = () => {
    setIsNavbarOpen(false); // Close the navbar when a menu item is clicked
  };


  return (
    <div>
      <div className="container-fluid p-0 shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-md-1 p-2  mx-md-2 mx-2"  >
          <Link to="/" className="nav-link d-flex align-items-end" style={{ width: '60%' }} onClick={handleMenuItemClick}>
            <div style={{ width: '50px' }} className='mx-2'>
              <img src="/images/logo/chair.png" className=" " />
            </div>
            <h3 className="font-weight-bold text-dark companyname">HOME DESIGNER </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            onClick={handleNavbarToggle}
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`pt-md-0 pt-3 collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-md-center align-items-start">

              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleMenuItemClick}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleMenuItemClick}>
                  About
                </Link>
              </li>

              {/* <li className="nav-item">
                <Link className="nav-link" to="/products" onClick={handleMenuItemClick}>
                  Products
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link className="nav-link" to="/services" onClick={handleMenuItemClick}>
                  Services
                </Link>
              </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleMenuItemClick}>
                  Contact
                </Link>
              </li>

              <li className="nav-item bg-danger p-2">
                <Link className="nav-link text-white font-bold py-0" to="/projects" onClick={handleMenuItemClick}>
                  Projects
                </Link>
              </li>
              
            </ul>

          </div>
        </nav>
      </div>
    </div>

  );
};

export default Header;
