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
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'auto';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Enhanced Custom Styles */}
      <style>{`
        .enhanced-navbar {
          background: ${isScrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'linear-gradient(135deg, #F3742B 0%, #B83A14 100%)'
          };
          backdrop-filter: blur(20px);
          border: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: ${isScrolled 
            ? '0 8px 32px rgba(243, 116, 43, 0.1)' 
            : '0 4px 20px rgba(184, 58, 20, 0.2)'
          };
        }
        
        .logo-container {
          background: linear-gradient(135deg, #FED172, #F3742B) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .logo-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }
        
        .logo-hover:hover .logo-container::before {
          left: 100%;
        }
        
        .logo-hover:hover .logo-container {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(243, 116, 43, 0.3);
        }
        
        .brand-text {
          background: ${isScrolled 
            ? 'linear-gradient(135deg, #F3742B, #B83A14)' 
            : 'linear-gradient(135deg, #ffffff, #FED172)'
          };
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800 !important;
          letter-spacing: -0.5px;
        }
        
        .nav-link-enhanced {
          position: relative;
          overflow: hidden;
          font-weight: 600;
          letter-spacing: 0.3px;
          border-radius: 50px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: ${isScrolled ? '#F3742B' : 'rgba(255, 255, 255, 0.9)'} !important;
        }
        
        .nav-link-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #F3742B, #B83A14);
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }
        
        .nav-link-enhanced:hover::before {
          left: 0;
        }
        
        .nav-link-enhanced:hover {
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(243, 116, 43, 0.3);
        }
        
        .nav-link-enhanced.active {
          background: linear-gradient(135deg, #F3742B, #B83A14) !important;
          color: white !important;
          box-shadow: 0 6px 20px rgba(243, 116, 43, 0.4);
          transform: translateY(-1px);
        }
        
        .mobile-menu-btn {
          background: ${isScrolled 
            ? 'rgba(243, 116, 43, 0.1)' 
            : 'rgba(255, 255, 255, 0.2)'
          } !important;
          border-radius: 15px !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .mobile-menu-btn:hover {
          background: linear-gradient(135deg, #F3742B, #B83A14) !important;
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(243, 116, 43, 0.3);
        }
        
        .mobile-menu-btn:hover .menu-icon {
          color: white !important;
        }
        
        .menu-icon {
          color: ${isScrolled ? '#F3742B' : 'white'} !important;
          transition: color 0.3s ease;
        }
        
        .mobile-backdrop {
          background: rgba(97, 46, 55, 0.8);
          backdrop-filter: blur(10px);
          animation: fadeIn 0.3s ease;
        }
        
        .mobile-menu-slide {
          background: linear-gradient(135deg, #F3742B 0%, #612E37 100%);
          animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .mobile-menu-content {
          height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 2rem 0;
        }
        
        .mobile-nav-item {
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          margin-bottom: 0.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: white !important;
        }
        
        .mobile-nav-item:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: translateX(10px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          color: white !important;
        }
        
        .mobile-nav-item.active {
          background: rgba(255, 255, 255, 0.3) !important;
          color: white !important;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
        
        .mobile-nav-arrow {
          opacity: 0.7;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }
        
        .mobile-nav-item:hover .mobile-nav-arrow {
          opacity: 1;
          transform: translateX(5px);
        }
        
        .close-btn-mobile {
          background: rgba(255, 255, 255, 0.2) !important;
          border-radius: 15px !important;
          transition: all 0.3s ease;
        }
        
        .close-btn-mobile:hover {
          background: rgba(255, 255, 255, 0.3) !important;
          transform: scale(1.1);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { 
            transform: translateX(100%); 
            opacity: 0;
          }
          to { 
            transform: translateX(0); 
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .brand-text {
            font-size: 1rem !important;
          }
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>

      <nav 
        className={`navbar navbar-expand-lg sticky-top enhanced-navbar ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-fluid px-4 d-flex align-items-center justify-content-between">
          {/* Enhanced Logo */}
          <Link 
            className="navbar-brand d-flex align-items-center text-decoration-none logo-hover" 
            to="/"
            aria-label="Digital Sikh Pustkalya - Home"
          >
            <div 
              className={`logo-container rounded-4 d-flex align-items-center justify-content-center me-3 ${
                isScrolled ? '' : 'pulse-animation'
              }`}
              style={{ width: '50px', height: '50px' }}
            >
              <img 
                src={logo} 
                alt="Digital Sikh Pustkalya Logo" 
                className="logo-image"
                style={{ width: '30px', height: '30px', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <div className="d-flex flex-column">
              <span className={`brand-text lh-1 transition-all ${
                isScrolled ? 'fs-5' : 'fs-4'
              } d-none d-sm-inline`}>
                Digital Sikh Pustkalya
              </span>
              <span className={`${isScrolled ? 'text-muted' : 'text-white-50'} fs-6 d-none d-md-inline`}>
                Digital Library
              </span>
              <span className="brand-text fw-bold fs-5 d-sm-none">
                DSP
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="d-none d-md-flex align-items-center gap-3">
            <NavLink
              to="/main-content"
              className={({ isActive }) =>
                `nav-link-enhanced btn text-decoration-none px-4 py-2 ${
                  isActive ? 'active' : ''
                }`
              }
            >
              Library
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link-enhanced btn text-decoration-none px-4 py-2 ${
                  isActive ? 'active' : ''
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link-enhanced btn text-decoration-none px-4 py-2 ${
                  isActive ? 'active' : ''
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/privacy"
              className={({ isActive }) =>
                `nav-link-enhanced btn text-decoration-none px-4 py-2 ${
                  isActive ? 'active' : ''
                }`
              }
            >
              Privacy Policy
            </NavLink>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="d-md-none mobile-menu-btn btn p-3"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? 
              <X className="menu-icon" size={24} /> : 
              <Menu className="menu-icon" size={24} />
            }
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="position-fixed top-0 start-0 w-100 vh-100 mobile-backdrop"
            onClick={closeMobileMenu}
            aria-hidden="true"
            style={{ zIndex: 1040 }}
          />
          
          <div 
            className="position-fixed top-0 start-0 w-100 vh-100 mobile-menu-slide"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            style={{ zIndex: 1045 }}
          >
            <div className="mobile-menu-content">
              {/* Enhanced Header */}
              <div className="d-flex justify-content-between align-items-center mb-4 p-4 border-bottom border-white border-opacity-25">
                <div className="d-flex align-items-center">
                  <div className="logo-container rounded-3 d-flex align-items-center justify-content-center me-3">
                    <img 
                      src={logo} 
                      alt="Logo" 
                      style={{ width: '28px', height: '28px', objectFit: 'contain' }}
                    />
                  </div>
                  <span className="fs-4 fw-bold text-white">Navigation</span>
                </div>
                <button 
                  className="close-btn-mobile btn p-2"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <X className="text-white" size={24} />
                </button>
              </div>

              {/* Enhanced Mobile Navigation Links */}
              <div className="d-flex flex-column gap-3 p-4 flex-grow-1">
                <NavLink 
                  to="/" 
                  className={({ isActive }) =>
                    `mobile-nav-item nav-link fs-5 p-4 rounded-4 text-decoration-none ${
                      isActive ? 'active' : ''
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
                    `mobile-nav-item nav-link fs-5 p-4 rounded-4 text-decoration-none ${
                      isActive ? 'active' : ''
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
                    `mobile-nav-item nav-link fs-5 p-4 rounded-4 text-decoration-none ${
                      isActive ? 'active' : ''
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
                    `mobile-nav-item nav-link fs-5 p-4 rounded-4 text-decoration-none ${
                      isActive ? 'active' : ''
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
                    `mobile-nav-item nav-link fs-5 p-4 rounded-4 text-decoration-none ${
                      isActive ? 'active' : ''
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

              {/* Enhanced Footer */}
              <div className="mt-auto p-4 border-top border-white border-opacity-25">
                <p className="text-center text-white fs-6 mb-0 opacity-75">
                  Digital Sikh Pustkalya © 2025
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