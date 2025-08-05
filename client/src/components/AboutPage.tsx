import React from 'react';
import { Book, Users, Shield, AlertTriangle, Sparkles, Heart } from 'lucide-react';
import Footer from './Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#fffef0] via-[#FED172]/20 to-[#F3742B]/10 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#F3742B]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#B83A14]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#612E37]/5 to-[#231650]/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto p-4 sm:p-8 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-[#FED172]/30">
            
            {/* Enhanced Header */}
            <div className="relative bg-gradient-to-r from-[#F3742B] via-[#B83A14] to-[#612E37] p-8 sm:p-12 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform rotate-12"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/50"></div>
                <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white/30"></div>
              </div>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30 shadow-lg">
                  <Book className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-5xl font-bold mb-3 leading-tight">
                    About Our Digital Library
                  </h1>
                  <p className="text-xl text-[#FED172] font-medium flex items-center justify-center sm:justify-start gap-2">
                    <Sparkles className="w-5 h-5" />
                    Connecting readers with knowledge
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="p-6 sm:p-12 space-y-12">
              
              {/* Mission Section */}
              <section className="text-center">
                <div className="relative bg-gradient-to-br from-[#fffef0] via-[#FED172]/20 to-[#F3742B]/10 p-8 sm:p-10 rounded-3xl border border-[#FED172]/30 shadow-lg">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-[#F3742B]/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-[#B83A14]/20 rounded-full"></div>
                  
                  <div className="bg-gradient-to-br from-[#F3742B] to-[#B83A14] w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg transform -rotate-3">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#231650] mb-6">Our Mission</h2>
                  <p className="text-lg sm:text-xl text-[#612E37] leading-relaxed max-w-4xl mx-auto">
                    We are dedicated to making knowledge accessible to everyone through our digital library platform.
                    Our mission is to democratize education and foster a love for reading in the digital age.
                  </p>
                </div>
              </section>

              {/* What We Do Section */}
              <section>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#231650] mb-8 flex items-center justify-center gap-4">
                  <div className="bg-gradient-to-r from-[#FED172] to-[#F3742B] p-3 rounded-xl">
                    <Book className="text-white w-8 h-8" />
                  </div>
                  What We Do
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#fffef0] to-[#FED172]/30 p-8 rounded-3xl border-l-8 border-[#F3742B] shadow-lg hover:shadow-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-[#F3742B] p-3 rounded-xl shadow-lg">
                          <Book className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-xl text-[#231650]">Digital Collection</h3>
                      </div>
                      <p className="text-[#612E37] leading-relaxed">
                        We curate and maintain a vast collection of digital books, documents, and educational resources
                        to support learning and research across various disciplines.
                      </p>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-br from-[#fffef0] to-[#F3742B]/20 p-8 rounded-3xl border-l-8 border-[#B83A14] shadow-lg hover:shadow-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-[#B83A14] p-3 rounded-xl shadow-lg">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-xl text-[#231650]">Open Access</h3>
                      </div>
                      <p className="text-[#612E37] leading-relaxed">
                        Our platform promotes open access to educational materials, making learning resources
                        available to students, researchers, and curious minds worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Enhanced Disclaimer */}
              <section className="relative">
                <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-3xl p-8 shadow-lg">
                  <div className="absolute top-4 right-4 w-12 h-12 bg-red-200/50 rounded-full flex items-center justify-center">
                    <AlertTriangle className="text-red-600 w-6 h-6" />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="bg-red-100 p-4 rounded-2xl border border-red-200 shadow-sm flex-shrink-0">
                      <AlertTriangle className="text-red-600 w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
                        Important Disclaimer
                        <Sparkles className="w-5 h-5 text-red-600" />
                      </h3>
                      <div className="text-red-700 space-y-4 leading-relaxed">
                        <p className="font-medium">
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
                </div>
              </section>

              {/* Enhanced Values Section */}
              <section>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#231650] mb-12 text-center">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Book,
                      title: "Education First",
                      description: "Prioritizing learning and knowledge sharing",
                      color: "from-[#F3742B] to-[#B83A14]",
                      bgColor: "from-[#FED172]/20 to-[#F3742B]/10"
                    },
                    {
                      icon: Users,
                      title: "Community",
                      description: "Building a community of learners and readers",
                      color: "from-[#B83A14] to-[#612E37]",
                      bgColor: "from-[#F3742B]/20 to-[#B83A14]/10"
                    },
                    {
                      icon: Shield,
                      title: "Respect",
                      description: "Respecting intellectual property and creators",
                      color: "from-[#612E37] to-[#231650]",
                      bgColor: "from-[#B83A14]/20 to-[#612E37]/10"
                    }
                  ].map((value, index) => (
                    <div key={index} className="group text-center hover:scale-105 transition-all duration-300">
                      <div className={`bg-gradient-to-br ${value.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-xl border border-[#FED172]/30`}>
                        <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:-rotate-3 transition-transform duration-300`}>
                          <value.icon className="text-white w-10 h-10" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-[#231650]">{value.title}</h3>
                        <p className="text-[#612E37] leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;