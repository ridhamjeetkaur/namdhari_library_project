// src/App.tsx
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components based on your provided file structure
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PrivacyPage from './components/PrivacyPage';

// Import your layout and content components for the home/dashboard area
import MainContent from './components/MainContent'; // Assuming this is the primary content for a section
import Layout from './components/Layout';
import Footer from './components/Footer';
import BookForm from './components/BookForm';

// --- Placeholder Components for routes mentioned in Header ---
// Create these files in 'src/components/' or 'src/pages/' if they don't exist yet
const HomePage: React.FC = () => {
  return (
    <><div className="flex flex-1"> {/* This div should contain your layout structure */}
      <Layout children={undefined} /> {/* Example: Sidebar within the HomePage layout */}
      <MainContent /> {/* Example: MainContent within the HomePage layout */}

    </div><Footer /></>
  );
};



const CategoriesPage: React.FC = () => (
  <div className="container py-5 text-center">
    <h1 className="display-4 text-warning-emphasis">Book Categories</h1>
    <p className="lead text-muted">Browse books by genre, topic, and more.</p>
    {/* You might want to import and render your CategoryFilter.tsx here */}
    {/* <CategoryFilter /> */}
  </div>
);

const MyBooksPage: React.FC = () => (
  <div className="container py-5 text-center">
    <h1 className="display-4 text-warning-emphasis">My Books</h1>
    <p className="lead text-muted">Your personal collection and reading list.</p>
  </div>
);

const NotFoundPage: React.FC = () => (
  <div className="container py-5 text-center">
    <h1 className="display-4 text-danger">404 - Page Not Found</h1>
    <p className="lead text-muted">The page you are looking for does not exist.</p>
    <Link to="/" className="btn btn-warning mt-3">Go to Home</Link>
  </div>
);
// --- End Placeholder Components ---


function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col bg-gray-50">
        <Header /> {/* Header stays here, visible on all pages */}

        {/* This div will contain the content that changes with routes */}
        <main className="flex-1 overflow-auto">
          <Routes>
            {/* The Home Page route, which might include your default layout (Sidebar + MainContent) */}
            <Route path="/" element={<HomePage />} />

            {/* Your dedicated pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />

            <Route path='/admin' element={<BookForm />} />
            {/* Routes for other links in your header */}
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/my-books" element={<MyBooksPage />} />

            {/* Catch-all route for unmatched paths */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;