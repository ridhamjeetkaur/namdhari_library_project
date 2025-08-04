import React from "react"
  
  export const colors = {
  primaryLight: '#FED172', // Lightest orange/yellow
  primary: '#F3742B',    // Main orange
  primaryDark: '#B83A14',   // Darker orange/red
  secondaryDark: '#612E37', // Dark brown/purple
  tertiaryDark: '#231650',  // Dark blue/purple
  white: '#ffffff',
  lightGray: '#f8f9fa',
  darkGray: '#343a40',
  mediumGray: '#495057',
  mutedGray: '#6c757d',
  softGray: '#adb5bd',
  brown: '#CD5C5C',
  skin:'#fffef0',
   accent: '#3b82f6',
  secondary: '#1e40af',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  dark: '#1f2937',
  light: '#f8fafc',
  gray: '#6b7280',
  brownCustom:'#332E1B'

};

// Custom CSS for the new color theme and specific styles
export const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${colors.lightGray};
  }

  /* Navbar Customization */
  .navbar-custom {
    background-color: ${colors.white};
    box-shadow: 0 2px 4px rgba(0,0,0,.05);
  }
  .navbar-brand-custom {
    color: ${colors.primaryDark} !important;
    font-weight: 700;
    font-size: 1.8rem;
  }
  .nav-link-custom {
    color: ${colors.mediumGray} !important;
    font-weight: 700; /* Made bolder */
    margin-right: 15px;
    font-size: 1.5rem; /* Made slightly bigger */
  }
  
  .nav-link-custom:hover {
    color: ${colors.primary} !important;
  }
  .btn-outline-custom {
    border-color: ${colors.primary};
    color: ${colors.primary};
    font-weight: 700;
    border-radius: 8px;
    padding: 8px 20px;
    transition: all 0.3s ease;
    font-size: 1.5rem;
  }
  .btn-outline-custom:hover {
    background-color: ${colors.primary};
    color: ${colors.white};
  }
  .btn-primary-custom {
    background-color: ${colors.primary};
    border-color: ${colors.primary};
    color: ${colors.white};
    font-weight: 600;
    border-radius: 8px;
    padding: 8px 20px;
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }
  .btn-primary-custom:hover {
    background-color: ${colors.primaryDark};
    border-color: ${colors.primaryDark};
  }

  /* Hero Section Customization */
  .hero-section {
    background-color: ${colors.lightGray};
    padding: 10px 0;
  }
  .hero-content .small-text {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${colors.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  .hero-content h1 {
    font-size: 3.8rem;
    font-weight: 800;
    color: ${colors.darkGray};
    line-height: 1.2;
    margin-bottom: 25px;
  }
  .hero-content p {
    font-size: 1.35rem;
    color: ${colors.mediumGray};
    line-height: 1.6;
    margin-bottom: 40px;
  }
  .btn-hero-cta {
    background-color: ${colors.primary};
    color: ${colors.white};
    font-weight: 600;
    padding: 15px 35px;
    border-radius: 8px;
    border: none;
    font-size: 1.5rem;
    transition: background-color 0.3s ease;
  }
   .bg-warning {
    background-color:${colors.brown};
    }
  .btn-hero-cta:hover {
    background-color: ${colors.primaryDark};
  }
  .hero-image {
    max-width: 800px;
    height: 600px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  /* Services Section Customization */
  .services-section {
    background-color: ${colors.white};
    padding: 80px 0;
  }

  
  .service-card {
    border: none;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
  }
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,.12);
  }
  .service-icon-wrapper {
    background-color: ${colors.lightGray};
    padding: 15px;
    border-radius: 50%;
    display: inline-flex;
    margin-bottom: 20px;
  }
  .service-icon {
    color: ${colors.brown};
    font-size: 28px;
  }
  .service-card h3 {
    color: ${colors.darkGray};
    font-weight: 700;
    margin-bottom: 10px;
  }
  .service-card p {
    color: ${colors.mutedGray};
  }

  /* CTA Section Customization */
  .cta-section {
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: 80px 0;
    text-align: center;
  }
  .cta-section h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 25px;
  }
  .cta-section p {
    font-size: 1.25rem;
    margin-bottom: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  .btn-cta-large {
    background-color: ${colors.white};
    color: ${colors.primary};
    font-weight: 700;
    padding: 15px 40px;
    border-radius: 8px;
    border: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }
  .btn-cta-large:hover {
    background-color: ${colors.lightGray};
    color: ${colors.primaryDark};
  }

  /* Contact Section Customization */
  .contact-section {
    background-color: ${colors.lightGray};
    padding: 80px 0;
  }
  .contact-info-card {
    background-color: ${colors.white};
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,.08);
    padding: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .contact-info-card .icon-wrapper {
    background-color: ${colors.primaryLight};
    padding: 15px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  .contact-info-card .icon-wrapper svg {
    color: ${colors.primaryDark};
    font-size: 30px;
  }
  .contact-info-card h4 {
    color: ${colors.darkGray};
    font-weight: 700;
    margin-bottom: 10px;
  }
  .contact-info-card p {
    color: ${colors.mutedGray};
    margin-bottom: 5px;
  }
  .contact-form-card {
    background-color: ${colors.white};
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,.08);
    padding: 40px;
    font-size: 1.5rem;
  }
  .contact-form-card .form-control {
    border-radius: 8px;
    border-color: ${colors.softGray};
    padding: 12px;
  }
  .contact-form-card .form-control:focus {
    border-color: ${colors.primary};
    box-shadow: 0 0 0 0.25rem rgba(255, 140, 0, 0.25);
  }
  .btn-submit-form {
    background-color: ${colors.primary};
    color: ${colors.white};
    font-weight: 600;
    padding: 12px 30px;
    border-radius: 8px;
    border: none;
    transition: background-color 0.3s ease;
  }
  .btn-submit-form:hover {
    background-color: ${colors.primaryDark};
  }

  /* About Section Customization */
  .about-section {
    background-color: grey;
    padding: 80px 0;
  }
  .about-section h2 {
    color: ${colors.white};
    font-weight: 800;
    margin-bottom: 25px;
  }
  .about-section p {
    color: ${colors.white};
    line-height: 1.7;
    margin-bottom: 20px;
    font-size: 1.5rem;
    text-align:justify;
  }
  .about-image {
    border-radius: 12px;
  }

  /* Feedback Section Customization */
  .feedback-section {
    background-color: ${colors.lightGray};
    padding: 80px 0;
  }
  .feedback-card {
    background-color: ${colors.white};
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,.08);
    padding: 30px;
    height: 100%;
  }
  .feedback-card .quote-icon {
    color: ${colors.primary};
    font-size: 40px;
    margin-bottom: 20px;
  }
  .feedback-card p {
    font-style: italic;
    color: ${colors.mediumGray};
    margin-bottom: 20px;
  }
  .feedback-card .author-name {
    font-weight: 600;
    color: ${colors.darkGray};
  }
  .feedback-card .author-title {
    color: ${colors.mutedGray};
    font-size: 0.9rem;
  }

  /* Footer Customization */
  .footer-section {
    background-color: ${colors.tertiaryDark}; /* Dark blue/purple background */
    color: ${colors.softGray};
    padding: 60px 0;
  }
  .footer-section h5 {
    color: ${colors.white};
    font-weight: 600;
    margin-bottom: 20px;
  }
  .footer-section .nav-link {
    color: ${colors.softGray};
    padding: 5px 0;
    transition: color 0.3s ease;
  }
  .footer-section .nav-link:hover {
    color: ${colors.primary};
  }
  .social-icon {
    color: ${colors.softGray};
    font-size: 24px;
    margin-right: 15px;
    transition: color 0.3s ease;
  }
  .social-icon:hover {
    color: ${colors.primary};
  }

  /* Responsive adjustments */
  @media (max-width: 991.98px) {
    .hero-section, .services-section, .cta-section, .contact-section, .about-section, .feedback-section {
      padding: 80px 0;
    }
    .hero-content h1 {
      font-size: 3rem;
    }
    .hero-content p {
      font-size: 1rem;
    }
    .hero-image-container {
      margin-top: 50px;
    }
    .cta-section h2 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 767.98px) {
    .hero-section, .services-section, .cta-section, .contact-section, .about-section, .feedback-section {
      padding: 60px 0;
    }
    .hero-content h1 {
      font-size: 2.5rem;
    }
    .hero-content p {
      font-size: 0.95rem;
    }
    .cta-section h2 {
      font-size: 2rem;
    }
    .cta-section p {
      font-size: 1rem;
    }
    .footer-section, .contact-section, .about-section {
      text-align: center;
    }
    .footer-section .col-lg-3, .contact-section .col-lg-4 {
      margin-bottom: 30px;
    }
    .footer-section .social-icons, .contact-info-card {
      justify-content: center !important;
    }
  }

  @media (max-width: 575.98px) {
    .hero-section, .services-section, .cta-section, .contact-section, .about-section, .feedback-section {
      padding: 40px 0;
    }
    .hero-content h1 {
      font-size: 2rem;
    }
    .btn-hero-cta {
      padding: 12px 25px;
      font-size: 1rem;
    }
  }
`;
const Color:React.FC=()=>{
  
    return(
        <React.Fragment>
            
        </React.Fragment>
    )
}
export default Color;