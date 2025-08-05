import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/images/logo.png";
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for enhanced design
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when mobile menu is open for better UX
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <nav 
        className={`navbar navbar-light border-bottom shadow-sm sticky-top transition-all duration-300 ${
          isScrolled 
            ? 'bg-white py-2 border-warning shadow-lg' 
            : 'bg-warning-subtle py-3 border-warning'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-fluid px-4 d-flex align-items-center justify-content-between">
          {/* Enhanced Logo with hover effects */}
          <Link 
            className="navbar-brand d-flex align-items-center text-decoration-none logo-hover" 
            to="/"
            aria-label="Digital Sikh Pustkalya - Home"
          >
            <div 
              className={`rounded-3 d-flex align-items-center justify-content-center me-3 logo-container transition-all ${
                isScrolled ? 'bg-warning shadow-sm' : 'bg-warning shadow'
              }`}
              style={{ width: '45px', height: '45px' }}
            >
              <img 
                src={logo} 
                alt="Digital Sikh Pustkalya Logo" 
                className="logo-image"
                style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <div className="d-flex flex-column">
              <span className={`fw-bold lh-1 brand-text transition-all ${
                isScrolled ? 'text-warning-emphasis fs-5' : 'text-warning-emphasis fs-4'
              } d-none d-sm-inline`}>
                Digital Sikh Pustkalya
              </span>
              <span className="text-warning fs-6 d-none d-md-inline opacity-75">
                Digital Library
              </span>
              <span className="text-warning-emphasis fw-bold fs-5 d-sm-none">
                DSP
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation Links */}
          <div className="d-none d-md-flex align-items-center gap-2">
            <NavLink
              to="/main-content"
              className={({ isActive }) =>
                `btn btn-link text-decoration-none px-4 py-2 rounded-pill fw-medium nav-link-custom transition-all ${
                  isActive 
                    ? 'text-white bg-warning shadow-sm border border-warning-emphasis' 
                    : 'text-warning-emphasis hover-lift'
                }`
              }
            >
              Library
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `btn btn-link text-decoration-none px-4 py-2 rounded-pill fw-medium nav-link-custom transition-all ${
                  isActive 
                    ? 'text-white bg-warning shadow-sm border border-warning-emphasis' 
                    : 'text-warning-emphasis hover-lift'
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `btn btn-link text-decoration-none px-4 py-2 rounded-pill fw-medium nav-link-custom transition-all ${
                  isActive 
                    ? 'text-white bg-warning shadow-sm border border-warning-emphasis' 
                    : 'text-warning-emphasis hover-lift'
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                `btn btn-link text-decoration-none px-4 py-2 rounded-pill fw-medium nav-link-custom transition-all ${
                  isActive 
                    ? 'text-white bg-warning shadow-sm border border-warning-emphasis' 
                    : 'text-warning-emphasis hover-lift'
                }`
              }
            >
              Privacy Policy
            </NavLink>
          </div>

          {/* Enhanced Mobile Toggler */}
          <button
            className="d-md-none btn p-2 rounded-circle mobile-menu-btn transition-all"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="menu-icon-wrapper">
              {isMobileMenuOpen ? 
                <X className="text-warning-emphasis" size={24} /> : 
                <Menu className="text-warning-emphasis" size={24} />
              }
            </div>
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Fullscreen Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Animated Backdrop */}
          <div 
            className="position-fixed top-0 start-0 w-100 vh-100 mobile-backdrop"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          {/* Enhanced Mobile Menu with animations */}
          <div 
            className="position-fixed top-0 start-0 w-100 vh-100 mobile-menu-slide z-3 overflow-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="mobile-menu-content">
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-4 p-4 border-bottom border-warning-subtle">
                <div className="d-flex align-items-center">
                  <div className="bg-warning rounded-3 d-flex align-items-center justify-content-center me-3 shadow">
                    <img 
                      src={logo} 
                      alt="Logo" 
                      style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                    />
                  </div>
                  <span className="fs-4 fw-bold text-warning-emphasis">Menu</span>
                </div>
                <button 
                  className="btn p-2 rounded-circle close-btn-mobile"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <X className="text-warning-emphasis" size={24} />
                </button>
              </div>

              {/* Enhanced Mobile Links */}
              <div className="d-flex flex-column gap-2 p-4">
                <NavLink 
                  to="/" 
                  className={({ isActive }) =>
                    `nav-link fs-5 p-4 rounded-4 text-decoration-none mobile-nav-item transition-all ${
                      isActive 
                        ? 'text-white bg-warning shadow border border-warning-emphasis' 
                        : 'text-warning-emphasis mobile-nav-hover'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <span>Home</span>
                    <div className="mobile-nav-arrow">→</div>
                  </div>
                </NavLink>
                
                <NavLink 
                  to="/main-content" 
                  className={({ isActive }) =>
                    `nav-link fs-5 p-4 rounded-4 text-decoration-none mobile-nav-item transition-all ${
                      isActive 
                        ? 'text-white bg-warning shadow border border-warning-emphasis' 
                        : 'text-warning-emphasis mobile-nav-hover'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <span>Library</span>
                    <div className="mobile-nav-arrow">→</div>
                  </div>
                </NavLink>

                <NavLink 
                  to="/about" 
                  className={({ isActive }) =>
                    `nav-link fs-5 p-4 rounded-4 text-decoration-none mobile-nav-item transition-all ${
                      isActive 
                        ? 'text-white bg-warning shadow border border-warning-emphasis' 
                        : 'text-warning-emphasis mobile-nav-hover'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <span>About Us</span>
                    <div className="mobile-nav-arrow">→</div>
                  </div>
                </NavLink>

                <NavLink 
                  to="/contact" 
                  className={({ isActive }) =>
                    `nav-link fs-5 p-4 rounded-4 text-decoration-none mobile-nav-item transition-all ${
                      isActive 
                        ? 'text-white bg-warning shadow border border-warning-emphasis' 
                        : 'text-warning-emphasis mobile-nav-hover'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <span>Contact</span>
                    <div className="mobile-nav-arrow">→</div>
                  </div>
                </NavLink>

                <NavLink 
                  to="/privacy" 
                  className={({ isActive }) =>
                    `nav-link fs-5 p-4 rounded-4 text-decoration-none mobile-nav-item transition-all ${
                      isActive 
                        ? 'text-white bg-warning shadow border border-warning-emphasis' 
                        : 'text-warning-emphasis mobile-nav-hover'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <span>Privacy Policy</span>
                    <div className="mobile-nav-arrow">→</div>
                  </div>
                </NavLink>
              </div>

              {/* Footer */}
              <div className="mt-auto p-4 border-top border-warning-subtle">
                <p className="text-center text-warning fs-6 mb-0 opacity-75">
                  Digital Sikh Pustkalya
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      
    </>
  );
};

export default Header;