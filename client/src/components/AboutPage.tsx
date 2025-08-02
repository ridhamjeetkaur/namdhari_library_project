import React from 'react';
import { Book, Users, Shield, AlertTriangle } from 'lucide-react';
import Footer from './Footer';

const AboutPage: React.FC = () => {
  return (
    <><div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-500 p-8 text-white">
          <div className="flex items-center gap-4">
            <Book className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold mb-2">About Our Digital Library</h1>
              <p className="text-yellow-100 text-lg">Connecting readers with knowledge</p>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Mission Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl mb-6">
              <Users className="w-16 h-16 mx-auto text-yellow-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are dedicated to making knowledge accessible to everyone through our digital library platform.
                Our mission is to democratize education and foster a love for reading in the digital age.
              </p>
            </div>
          </section>
          {/* What We Do */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Book className="text-yellow-600" />
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">Digital Collection</h3>
                <p className="text-gray-600">
                  We curate and maintain a vast collection of digital books, documents, and educational resources
                  to support learning and research across various disciplines.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <h3 className="font-semibold text-lg mb-3 text-gray-800">Open Access</h3>
                <p className="text-gray-600">
                  Our platform promotes open access to educational materials, making learning resources
                  available to students, researchers, and curious minds worldwide.
                </p>
              </div>
            </div>
          </section>
          {/* Important Disclaimer */}
          <section className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-3">Important Disclaimer</h3>
                <div className="text-red-700 space-y-2">
                  <p>
                    This is an educational library project. The books and content available on this platform
                    are collected from various publicly available sources across the internet for educational
                    and research purposes only.
                  </p>
                  <p>
                    We do not claim ownership of any copyrighted materials. All content belongs to their
                    respective authors, publishers, and copyright holders. If you are a copyright owner and
                    believe your work has been used inappropriately, please contact us immediately.
                  </p>
                  <p>
                    This project is intended solely for educational purposes and non-commercial use.
                    Users are encouraged to purchase original copies to support authors and publishers.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Values */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="text-yellow-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Education First</h3>
                <p className="text-gray-600 text-sm">Prioritizing learning and knowledge sharing</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-orange-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-gray-600 text-sm">Building a community of learners and readers</p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-yellow-600" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Respect</h3>
                <p className="text-gray-600 text-sm">Respecting intellectual property and creators</p>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div><Footer /></>
  );
};

export default AboutPage;