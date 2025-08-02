import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';
import Footer from './Footer';

const PrivacyPage: React.FC = () => {
  return (
    <><div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-500 p-8 text-white">
          <div className="flex items-center gap-4">
            <Shield className="w-12 h-12" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-yellow-100 text-lg">Your privacy matters to us</p>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Important Notice */}
          <section className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-bold text-red-800 mb-3">Content Disclaimer</h2>
                <div className="text-red-700 space-y-3">
                  <p>
                    <strong>Educational Purpose:</strong> This digital library is created for educational and research purposes only.
                    All books and materials available on this platform are collected from various publicly available sources on the internet.
                  </p>
                  <p>
                    <strong>Copyright Notice:</strong> We do not claim ownership of any copyrighted materials. All content belongs to
                    their respective authors, publishers, and copyright holders. The materials are provided under fair use for
                    educational purposes.
                  </p>
                  <p>
                    <strong>No Commercial Use:</strong> This platform is not intended for commercial purposes. Users are encouraged
                    to purchase original copies to support authors and publishers.
                  </p>
                  <p>
                    <strong>Content Removal:</strong> If you are a copyright owner and believe your work has been used inappropriately,
                    please contact us at copyright@example.com, and we will promptly remove the content.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Privacy Sections */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Information We Collect</h2>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Basic usage analytics to improve our service</li>
                <li>Contact information when you reach out to us</li>
                <li>Browser information for technical support</li>
                <li>No personal reading habits or detailed user tracking</li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">How We Use Information</h2>
            <div className="bg-orange-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-4">We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Maintain and improve our digital library platform</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Ensure the platform runs smoothly and securely</li>
                <li>Comply with legal requirements and copyright requests</li>
              </ul>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Data Security</h2>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <p className="text-gray-700">
                We implement reasonable security measures to protect any information collected. However, as this is
                an educational project, we recommend not sharing sensitive personal information through our platform.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Third-Party Content</h2>
            <div className="bg-orange-50 p-6 rounded-xl">
              <p className="text-gray-700">
                Our library contains materials sourced from various websites and platforms across the internet.
                We are not responsible for the privacy practices of the original sources. Users should be aware
                that the content comes from multiple third-party sources.
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, concerns about copyright, or need to report
                content that should be removed, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white rounded-lg border">
                <p className="text-gray-800"><strong>Email:</strong> ridhamjeet@gmail.com</p>
                <p className="text-gray-800"><strong>Copyright Issues:</strong> ridhamjeet@gmail.com</p>
              </div>
            </div>
          </section>
          <section className="text-center text-sm text-gray-500 border-t pt-6">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>This privacy policy may be updated periodically to reflect changes in our practices.</p>
          </section>
        </div>
      </div>

    </div><Footer /></>
  );
};

export default PrivacyPage;