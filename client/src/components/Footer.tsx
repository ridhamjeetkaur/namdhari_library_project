import { colors } from './Color';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom'; // ✅ Correct import

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#' },
    { icon: <Twitter size={20} />, href: '#' },
    { icon: <Instagram size={20} />, href: '#' },
    { icon: <Linkedin size={20} />, href: '#' }
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/categories', label: 'Categories' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
    { to: '/privacy', label: 'Privacy Policy' }
  ];

  return (
    <footer className="py-5" style={{ backgroundColor: colors.brownCustom }}>
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-6 mb-4">
            <div className="d-flex align-items-center mb-4">
              <div
                className="me-3"
                style={{
                  width: '70px',
                  height: '70px',
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  className="img-fluid"
                  style={{
                    objectFit: 'contain',
                    maxHeight: '70px',
                  }}
                />
              </div>
              <span className="fw-bold fs-4 text-white">ਡਿਜੀਟਲ ਸਿੱਖ ਪੁਸਤਕਾਲਿਆ</span>
            </div>
            <p style={{ color: colors.light }}>
ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੀ ਅਮੀਰੀ ਦੀ ਖੋਜ ਕਰੋ। ਸਾਡੀਆਂ ਸ਼ੈਲਫਾਂ ਉਨ੍ਹਾਂ ਕਹਾਣੀਆਂ ਨਾਲ ਭਰੀਆਂ ਹੋਈਆਂ ਹਨ ਜੋ ਸਾਡੇ ਸੱਭਿਆਚਾਰ ਅਤੇ ਵਿਰਾਸਤ ਨਾਲ ਮੇਲ ਖਾਂਦੀਆਂ ਹਨ। ਅਸੀਂ ਕਲਾਸਿਕ ਕਹਾਣੀਆਂ ਤੋਂ ਲੈ ਕੇ ਆਧੁਨਿਕ ਮਾਸਟਰਪੀਸ ਤੱਕ, ਕਿਤਾਬਾਂ ਦਾ ਇੱਕ ਵਿਸ਼ਾਲ ਸੰਗ੍ਰਹਿ ਪੇਸ਼ ਕਰਦੇ ਹਾਂ। ਸਾਹਿਤਕ ਸਮਾਗਮਾਂ ਲਈ ਸਾਡੇ ਨਾਲ ਜੁੜੋ ਅਤੇ ਲਿਖਤੀ ਸ਼ਬਦ ਦੀ ਸ਼ਕਤੀ ਦਾ ਜਸ਼ਨ ਮਨਾਓ। ਸਾਡੀ ਲਾਇਬ੍ਰੇਰੀ ਵਿੱਚ ਆਓ, ਪੜ੍ਹੋ ਅਤੇ ਆਪਣੀਆਂ ਜੜ੍ਹਾਂ ਨਾਲ ਜੁੜੋ।            </p>
            <div className="d-flex gap-3 mt-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '45px',
                    height: '45px',
                    backgroundColor: `${colors.primary}20`,
                    color: colors.primary,
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${colors.primary}20`;
                    e.currentTarget.style.color = colors.primary;
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
<div className='col-lg-1'></div>
          {/* Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={link.to}
                    className="text-decoration-none"
                    style={{
                      color: colors.light,
                      fontSize: '16px',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = colors.primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.light;
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row mt-5 pt-4" style={{ borderTop: `1px solid ${colors.gray}30` }}>
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0" style={{ color: colors.mutedGray }}>
              © Digital Sikh Pustkalya 2025. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0" style={{ color: colors.mutedGray }}>
              Made with ❤️ for Readers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
