import React, { useState } from 'react';
import { Mail, Phone, AlertTriangle, CheckCircle, XCircle, Send, Sparkles } from 'lucide-react';
import Footer from './Footer';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ResponseData {
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const EXPRESS_API_URL = 'https://namdhari-library-project.onrender.com/api/contact';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch(EXPRESS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ResponseData = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Your message has been sent successfully!");
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#fffef0] via-[#FED172]/10 to-[#F3742B]/5 relative">
        {/* Decorative Background Elements - scaled down for smaller screens */}
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-bl from-[#F3742B]/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-tr from-[#B83A14]/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-r from-[#612E37]/5 to-[#231650]/5 rounded-full blur-xl"></div>

        <div className="max-w-7xl mx-auto p-4 sm:p-6 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden border border-[#FED172]/30">
            {/* Enhanced Header */}
            <div className="relative bg-gradient-to-r from-[#F3742B] via-[#B83A14] to-[#612E37] p-4 sm:p-6 text-white">
              <div className="relative z-10 text-center">
                <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-white/30 shadow-md inline-block mb-4">
                  <Mail className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold mb-2">Contact Us</h1>
                <p className="text-lg sm:text-xl text-[#FED172] font-medium flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  We'd love to hear from you
                </p>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div className="space-y-4 lg:space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#231650]">Get In Touch</h2>
                    <p className="text-[#612E37] text-base">We're here to help and answer questions you might have.</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Mail,
                        title: "Email",
                        content: "digitalsikhpustkalya@gmail.com",
                        color: "from-[#F3742B] to-[#B83A14]",
                        bgColor: "from-[#FED172]/20 to-[#F3742B]/10",
                      },
                      {
                        icon: Phone,
                        title: "Phone",
                        content: "+91 7527828430",
                        color: "from-[#B83A14] to-[#612E37]",
                        bgColor: "from-[#F3742B]/20 to-[#B83A14]/10",
                      },
                    ].map((contact, index) => (
                      <div key={index} className="group hover:scale-105 transition-all duration-300">
                        <div className={`bg-gradient-to-br ${contact.bgColor} p-3 sm:p-4 rounded-xl shadow-md hover:shadow-lg border border-[#FED172]/30`}>
                          <div className="flex items-center gap-2">
                            <div className={`bg-gradient-to-br ${contact.color} p-2 sm:p-3 rounded-lg shadow-md`}>
                              <contact.icon className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div>
                              <h3 className="font-bold text-base text-[#231650] mb-1">{contact.title}</h3>
                              <p className="text-[#612E37] text-sm">{contact.content}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Copyright Notice */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-3 sm:p-4 shadow-md">
                    <div className="flex items-start gap-2">
                      <div className="bg-red-100 p-2 rounded-lg border border-red-200 shadow-sm">
                        <AlertTriangle className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-red-800 mb-1 flex items-center gap-1">
                          Copyright Concerns
                          <Sparkles className="w-3 h-3 text-red-600" />
                        </h3>
                        <p className="text-red-700 text-xs sm:text-sm leading-relaxed">
                          If you are a copyright owner and believe your work has been used without permission,
                          please contact us at <span className="font-bold bg-red-200 px-1 py-0.5 rounded">digitalsikhpustkalya@gmail.com</span>.
                          We will promptly investigate and remove any infringing content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gradient-to-br from-[#fffef0] via-[#FED172]/10 to-[#F3742B]/5 p-4 sm:p-6 rounded-2xl shadow-md border border-[#FED172]/30">
                  <div className="text-center mb-4 sm:mb-6">
                    <h2 className="text-2xl font-bold text-[#231650] mb-2">Send Message</h2>
                    <p className="text-[#612E37] text-base">Fill out the form below and we'll get back to you soon!</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-[#231650] mb-1 sm:mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full p-2 sm:p-3 border-2 border-[#FED172]/50 rounded-lg focus:ring-2 focus:ring-[#F3742B]/20 focus:border-[#F3742B] transition-all bg-white/80 backdrop-blur-sm"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-[#231650] mb-1 sm:mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full p-2 sm:p-3 border-2 border-[#FED172]/50 rounded-lg focus:ring-2 focus:ring-[#F3742B]/20 focus:border-[#F3742B] transition-all bg-white/80 backdrop-blur-sm"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-[#231650] mb-1 sm:mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full p-2 sm:p-3 border-2 border-[#FED172]/50 rounded-lg focus:ring-2 focus:ring-[#F3742B]/20 focus:border-[#F3742B] transition-all bg-white/80 backdrop-blur-sm"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option>General Inquiry</option>
                        <option>Copyright Concern</option>
                        <option>Technical Support</option>
                        <option>Content Request</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-[#231650] mb-1 sm:mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full p-2 sm:p-3 border-2 border-[#FED172]/50 rounded-lg focus:ring-2 focus:ring-[#F3742B]/20 focus:border-[#F3742B] transition-all bg-white/80 backdrop-blur-sm resize-none"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {loading && (
                      <div className="flex items-center justify-center p-2 bg-blue-50 text-blue-700 rounded-lg shadow-inner border border-blue-200">
                        <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-blue-700 mr-2"></div>
                        Sending your message...
                      </div>
                    )}
                    {success && (
                      <div className="flex items-center p-2 bg-green-50 text-green-700 rounded-lg shadow-inner border border-green-200">
                        <CheckCircle className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{success}</span>
                      </div>
                    )}
                    {error && (
                      <div className="flex items-center p-2 bg-red-50 text-red-700 rounded-lg shadow-inner border border-red-200">
                        <XCircle className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#F3742B] to-[#B83A14] text-white py-2 sm:py-3 px-4 rounded-lg font-bold text-sm sm:text-base hover:from-[#B83A14] hover:to-[#612E37] transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-3 w-3 sm:h-4 sm:w-4 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;