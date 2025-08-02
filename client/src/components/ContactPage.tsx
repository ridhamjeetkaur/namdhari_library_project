// src/components/ContactPage.tsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import Footer from './Footer';

// No Firebase imports needed for this approach

const ContactPage: React.FC = () => {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');

  // State for form submission status
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Define your Express.js backend URL
  // IMPORTANT: Replace with the actual URL where your Express server is running
  // During development, it's usually http://localhost:5000 (or your chosen port)
  const EXPRESS_API_URL = 'http://localhost:5000/api/contact';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch(EXPRESS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }), // Send form data as JSON
      });

      const data = await response.json(); // Parse the JSON response from your Express server

      if (response.ok) { // Check if the HTTP status code is in the 2xx range
        setSuccess(data.message || "Your message has been sent successfully!");
        // Clear form fields after successful submission
        setName('');
        setEmail('');
        setSubject('General Inquiry');
        setMessage('');
      } else {
        // Handle errors from the Express server (e.g., 400, 500 status codes)
        setError(data.message || `Failed to send message: ${response.statusText}`);
        console.error('Server error:', data);
      }

    } catch (err: any) {
      console.error("Network or fetch error: ", err);
      setError(`Failed to send message: ${err.message || 'Network error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <><div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-500 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-yellow-100 text-lg">We'd love to hear from you</p>
        </div>
        {/* Content */}
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl">
                  <Mail className="text-yellow-600" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">library@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl">
                  <Phone className="text-orange-600" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-xl">
                  <MapPin className="text-yellow-600" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Library Street<br />Education City, EC 12345</p>
                  </div>
                </div>
              </div>
              {/* Copyright Notice */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Copyright Concerns</h3>
                    <p className="text-red-700 text-sm">
                      If you are a copyright owner and believe your work has been used without permission,
                      please contact us immediately at <span className="font-semibold">copyright@example.com</span>.
                      We will promptly investigate and remove any infringing content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <select
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option>General Inquiry</option>
                    <option>Copyright Concern</option>
                    <option>Technical Support</option>
                    <option>Content Request</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* Submission Status Messages */}
                {loading && (
                  <div className="flex items-center justify-center p-3 bg-blue-100 text-blue-700 rounded-lg">
                    <Mail className="animate-spin mr-2" size={20} /> Sending message...
                  </div>
                )}
                {success && (
                  <div className="flex items-center p-3 bg-green-100 text-green-700 rounded-lg">
                    <CheckCircle className="mr-2" size={20} /> {success}
                  </div>
                )}
                {error && (
                  <div className="flex items-center p-3 bg-red-100 text-red-700 rounded-lg">
                    <XCircle className="mr-2" size={20} /> {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div><Footer /></>
  );
};

export default ContactPage;
