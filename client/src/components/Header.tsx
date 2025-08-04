import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import logo from "../assets/images/logo.png"
import { Link, NavLink } from 'react-router-dom'; // Import Link and NavLink

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="navbar navbar-light bg-warning-subtle border-bottom border-warning shadow-sm py-3">
        <div className="container-fluid px-4 d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/"> {/* Use Link here */}
            <div className="bg-warning rounded-3 d-flex align-items-center justify-content-center me-2" style={{ width: '36px', height: '36px' }}>
            <img src={logo}/>
            </div>
            <span className="text-warning-emphasis fw-bold fs-4">Digital Sikh Pustkalya</span>
          </Link>

          {/* Search Bar (visible only on desktop) */}
          {/* <div className="d-none d-md-block flex-grow-1 mx-4" style={{ maxWidth: '400px' }}>
            <div className="position-relative">
              <Search className="position-absolute start-0 top-50 translate-middle-y text-secondary ms-3" size={20} />
              <input
                type="text"
                placeholder="Search your favorite books, authors, or categories..."
                className="form-control rounded-pill ps-5 py-2 border border-light focus-ring focus-ring-warning"
              />
            </div>
          </div> */}

          {/* Desktop Navigation Links */}
          

          <div className="d-none d-md-flex align-items-center gap-3"> {/* Added gap for spacing */}
            <NavLink
              to="/main-content"
              className={({ isActive }) =>
                `btn btn-link text-decoration-none px-3 py-2 rounded-pill fw-medium ${
                  isActive ? 'text-warning-emphasis bg-warning-subtle' : 'text-secondary hover:text-warning-emphasis'
                }`
              }
            >
              Library
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `btn btn-link text-decoration-none px-3 py-2 rounded-pill fw-medium ${
                  isActive ? 'text-warning-emphasis bg-warning-subtle' : 'text-secondary hover:text-warning-emphasis'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `btn btn-link text-decoration-none px-3 py-2 rounded-pill fw-medium ${
                  isActive ? 'text-warning-emphasis bg-warning-subtle' : 'text-secondary hover:text-warning-emphasis'
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                `btn btn-link text-decoration-none px-3 py-2 rounded-pill fw-medium ${
                  isActive ? 'text-warning-emphasis bg-warning-subtle' : 'text-secondary hover:text-warning-emphasis'
                }`
              }
            >
              Privacy Policy
            </NavLink>

            
            <div className="d-flex align-items-center cursor-pointer p-2 rounded-pill bg-light-subtle-hover">
              
            </div>
          </div>

          {/* Mobile Toggler */}
          <button
            className="d-md-none btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="text-secondary" size={24} /> : <Menu className="text-secondary" size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isMobileMenuOpen && (
        <div className="position-fixed top-0 start-0 w-100 vh-100 bg-white z-3 overflow-auto p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span className="fs-4 fw-bold text-warning-emphasis">Menu</span>
            <button className="btn p-2 bg-light-subtle-hover rounded-circle" onClick={closeMobileMenu}>
              <X className="text-secondary" size={24} />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="position-relative mb-4">
            <Search className="position-absolute start-0 top-50 translate-middle-y text-secondary ms-3" size={20} />
            <input
              type="text"
              placeholder="Search your favorite books, authors, or categories..."
              className="form-control rounded-pill ps-5 py-2 border border-light"
            />
          </div>

          {/* Mobile Links */}
          <div className="d-flex flex-column gap-3">
            

            <div className="d-flex align-items-center p-3 rounded-3 bg-light-subtle-hover cursor-pointer" onClick={closeMobileMenu}>              
            </div>

            {/* Use NavLink for mobile menu items as well for active state */}
            <NavLink to="/" className="nav-link text-dark fs-5 p-3 rounded-3 bg-light-subtle-hover" onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/main-content" className="nav-link text-dark fs-5 p-3 rounded-3 bg-light-subtle-hover" onClick={closeMobileMenu}>Library</NavLink>
            <NavLink to="/about" className="nav-link text-dark fs-5 p-3 rounded-3 bg-light-subtle-hover" onClick={closeMobileMenu}>About Us</NavLink>
            <NavLink to="/contact" className="nav-link text-dark fs-5 p-3 rounded-3 bg-light-subtle-hover" onClick={closeMobileMenu}>Contact</NavLink>
            <NavLink to="/privacy" className="nav-link text-dark fs-5 p-3 rounded-3 bg-light-subtle-hover" onClick={closeMobileMenu}>Privacy Policy</NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;