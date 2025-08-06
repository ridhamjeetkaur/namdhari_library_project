import React, { useState } from 'react';
import { Mail, Phone, AlertTriangle, CheckCircle, XCircle, Send, Sparkles } from 'lucide-react';
import Footer from './Footer';

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
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message || "Your message has been sent successfully!");
        setName('');
        setEmail('');
        setSubject('General Inquiry');
        setMessage('');
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

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#fffef0] via-[#FED172]/10 to-[#F3742B]/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#F3742B]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#B83A14]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-[#612E37]/5 to-[#231650]/5 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto p-4 sm:p-8 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-[#FED172]/30">
            
            {/* Enhanced Header */}
            <div className="relative bg-gradient-to-r from-[#F3742B] via-[#B83A14] to-[#612E37] p-8 sm:p-12 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-white/30 transform rotate-45"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-white/20"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-white/40"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30 shadow-lg inline-block mb-6">
                  <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold mb-3">Contact Us</h1>
                <p className="text-xl text-[#FED172] font-medium flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  We'd love to hear from you
                </p>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-[#231650] mb-4">Get In Touch</h2>
                    <p className="text-[#612E37] text-lg">We're here to help and answer any questions you might have.</p>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Mail,
                        title: "Email",
                        content: "digitalsikhpustkalya@gmail.com",
                        color: "from-[#F3742B] to-[#B83A14]",
                        bgColor: "from-[#FED172]/20 to-[#F3742B]/10"
                      },
                      {
                        icon: Phone,
                        title: "Phone",
                        content: "+91 7527828430",
                        color: "from-[#B83A14] to-[#612E37]",
                        bgColor: "from-[#F3742B]/20 to-[#B83A14]/10"
                      },
                      
                    ].map((contact, index) => (
                      <div key={index} className="group hover:scale-105 transition-all duration-300">
                        <div className={`bg-gradient-to-br ${contact.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl border border-[#FED172]/30`}>
                          <div className="flex items-center gap-4">
                            <div className={`bg-gradient-to-br ${contact.color} p-4 rounded-xl shadow-lg`}>
                              <contact.icon className="text-white w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="font-bold text-lg text-[#231650] mb-1">{contact.title}</h3>
                              <p className="text-[#612E37] whitespace-pre-line">{contact.content}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Copyright Notice */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-xl border border-red-200 shadow-sm flex-shrink-0">
                        <AlertTriangle className="text-red-600 w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center gap-2">
                          Copyright Concerns
                          <Sparkles className="w-4 h-4 text-red-600" />
                        </h3>
                        <p className="text-red-700 text-sm leading-relaxed">
                          If you are a copyright owner and believe your work has been used without permission,
                          please contact us immediately at <span className="font-bold bg-red-200 px-2 py-1 rounded">digitalsikhpustkalya@gmail.com</span>.
                          We will promptly investigate and remove any infringing content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Contact Form */}
                <div className="bg-gradient-to-br from-[#fffef0] via-[#FED172]/10 to-[#F3742B]/5 p-8 rounded-3xl shadow-lg border border-[#FED172]/30">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#231650] mb-2">Send Message</h2>
                    <p className="text-[#612E37]">Fill out the form below and we'll get back to you soon!</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-[#231650] mb-3">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full p-4 border-2 border-[#FED172]/50 rounded-xl focus:ring-4 focus:ring-[#F3742B]/20 focus:border-[#F3742B] transition-all duration-300 bg-white/80 backdrop-blur-sm"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-[#231650] mb-3">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full p-4 border-2 border-[#FED172]/50 rounded-xl focus:ring-4 focus:ring-[#F3742B]/20 focus:border-[#F3742B] transition-all duration-300 bg-white/80 backdrop-blur-sm"
                          placeholder="your.email@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-[#231650] mb-3">
                        Subject
                      </label>
                      <select
                        id="subject"
                        className="w-full p-4 border-2 border-[#FED172]/50 rounded-xl focus:ring-4 focus:ring-[#F3742B]/20 focus:border-[#F3742B] transition-all duration-300 bg-white/80 backdrop-blur-sm"
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
                      <label htmlFor="message" className="block text-sm font-bold text-[#231650] mb-3">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full p-4 border-2 border-[#FED172]/50 rounded-xl focus:ring-4 focus:ring-[#F3742B]/20 focus:border-[#F3742B] transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                        placeholder="Tell us how we can help you..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>

                    {/* Status Messages */}
                    {loading && (
                      <div className="flex items-center justify-center p-4 bg-blue-50 text-blue-700 rounded-xl shadow-inner border border-blue-200">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700 mr-3"></div>
                        Sending your message...
                      </div>
                    )}
                    {success && (
                      <div className="flex items-center p-4 bg-green-50 text-green-700 rounded-xl shadow-inner border border-green-200">
                        <CheckCircle className="mr-3 w-5 h-5 flex-shrink-0" />
                        <span>{success}</span>
                      </div>
                    )}
                    {error && (
                      <div className="flex items-center p-4 bg-red-50 text-red-700 rounded-xl shadow-inner border border-red-200">
                        <XCircle className="mr-3 w-5 h-5 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#F3742B] to-[#B83A14] text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-[#B83A14] hover:to-[#612E37] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
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