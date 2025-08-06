import React from 'react';
import { Shield, AlertTriangle, Lock, Eye, Users, FileText, Sparkles } from 'lucide-react';
import Footer from './Footer';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#fffef0] via-[#FED172]/10 to-[#F3742B]/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-[#F3742B]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-tl from-[#B83A14]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-[#612E37]/3 to-[#231650]/3 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-[#FED172]/30">
            
            {/* Enhanced Header */}
            <div className="relative bg-gradient-to-r from-[#612E37] via-[#B83A14] to-[#F3742B] p-3 sm:p-4 md:p-6 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-2 right-2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white transform rotate-12"></div>
                <div className="absolute bottom-2 left-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/50"></div>
                <div className="absolute top-1/2 right-1/4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30"></div>
              </div>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-white/30 shadow-lg">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-lg sm:text-xl md:text-3xl font-bold mb-1 sm:mb-2 leading-tight">
                    Privacy Policy
                  </h1>
                  <p className="text-sm sm:text-base text-[#FED172] font-medium flex items-center justify-center sm:justify-start gap-1 sm:gap-2">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    Your privacy matters to us
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="p-2 sm:p-4 md:p-6 space-y-4 sm:space-y-6">
              
              {/* Important Notice */}
              <section className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-2 sm:p-4 shadow-lg">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="bg-red-100 p-2 sm:p-3 rounded-2xl border border-red-200 shadow-sm flex-shrink-0 mx-auto sm:mx-0">
                    <AlertTriangle className="text-red-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-base sm:text-lg font-bold text-red-800 mb-2 flex items-center justify-center sm:justify-start gap-1 sm:gap-2">
                      Content Disclaimer
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                    </h2>
                    <div className="text-red-700 space-y-2 sm:space-y-3 leading-relaxed text-sm sm:text-base">
                      <div className="grid gap-2 sm:gap-3">
                        <div className="bg-red-50 p-2 sm:p-3 rounded-xl border border-red-200">
                          <p className="font-semibold mb-1">📚 Educational Purpose:</p>
                          <p>This digital library is created for educational and research purposes only. All books and materials available on this platform are collected from various publicly available sources on the internet.</p>
                        </div>
                        <div className="bg-red-50 p-2 sm:p-3 rounded-xl border border-red-200">
                          <p className="font-semibold mb-1">© Copyright Notice:</p>
                          <p>We do not claim ownership of any copyrighted materials. All content belongs to their respective authors, publishers, and copyright holders. The materials are provided under fair use for educational purposes.</p>
                        </div>
                        <div className="bg-red-50 p-2 sm:p-3 rounded-xl border border-red-200">
                          <p className="font-semibold mb-1">🚫 No Commercial Use:</p>
                          <p>This platform is not intended for commercial purposes. Users are encouraged to purchase original copies to support authors and publishers.</p>
                        </div>
                        <div className="bg-red-50 p-2 sm:p-3 rounded-xl border border-red-200">
                          <p className="font-semibold mb-1">🗑️ Content Removal:</p>
                          <p>If you are a copyright owner and believe your work has been used inappropriately, please contact us at <span className="font-bold bg-red-200 px-1 sm:px-2 py-0.5 sm:py-1 rounded">digitalsikhpustkalya@gmail.com</span>, and we will promptly remove the content.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Privacy Sections Grid */}
              <div className="grid gap-4 sm:gap-6">
                
                {/* Information We Collect */}
                <section className="bg-gradient-to-br from-[#fffef0] via-[#FED172]/10 to-[#F3742B]/5 p-2 sm:p-4 rounded-2xl shadow-lg border border-[#FED172]/30">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                    <div className="bg-gradient-to-br from-[#F3742B] to-[#B83A14] p-1 sm:p-2 rounded-xl shadow-lg">
                      <Eye className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-[#231650]">Information We Collect</h2>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-2 sm:p-4 rounded-xl border border-[#FED172]/20">
                    <p className="text-[#612E37] mb-2 sm:mb-4 text-sm leading-relaxed">We may collect the following types of information:</p>
                    <div className="grid gap-2 sm:gap-3">
                      {[
                        "📊 Basic usage analytics to improve our service",
                        "📧 Contact information when you reach out to us", 
                        "🖥️ Browser information for technical support",
                        "🔒 No personal reading habits or detailed user tracking"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 p-2 bg-gradient-to-r from-[#FED172]/10 to-[#F3742B]/5 rounded-lg">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#F3742B] rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                          <span className="text-[#612E37] text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* How We Use Information */}
                <section className="bg-gradient-to-br from-[#fffef0] via-[#F3742B]/10 to-[#B83A14]/5 p-2 sm:p-4 rounded-2xl shadow-lg border border-[#F3742B]/30">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                    <div className="bg-gradient-to-br from-[#B83A14] to-[#612E37] p-1 sm:p-2 rounded-xl shadow-lg">
                      <Users className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-[#231650]">How We Use Information</h2>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-2 sm:p-4 rounded-xl border border-[#F3742B]/20">
                    <p className="text-[#612E37] mb-2 sm:mb-4 text-sm leading-relaxed">We use collected information to:</p>
                    <div className="grid gap-2 sm:gap-3">
                      {[
                        "🔧 Maintain and improve our digital library platform",
                        "💬 Respond to your inquiries and support requests",
                        "🛡️ Ensure the platform runs smoothly and securely",
                        "⚖️ Comply with legal requirements and copyright requests"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 p-2 bg-gradient-to-r from-[#F3742B]/10 to-[#B83A14]/5 rounded-lg">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#B83A14] rounded-full mt-1 sm:mt-2 flex-shrink-0"></div>
                          <span className="text-[#612E37] text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Data Security & Third-Party Content - Side by side on tablet/desktop */}
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <section className="bg-gradient-to-br from-[#fffef0] via-[#B83A14]/10 to-[#612E37]/5 p-2 sm:p-4 rounded-2xl shadow-lg border border-[#B83A14]/30">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                      <div className="bg-gradient-to-br from-[#612E37] to-[#231650] p-1 sm:p-2 rounded-xl shadow-lg">
                        <Lock className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-[#231650]">Data Security</h2>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-2 sm:p-4 rounded-xl border border-[#B83A14]/20">
                      <p className="text-[#612E37] leading-relaxed text-sm">
                        We implement reasonable security measures to protect any information collected. However, as this is
                        an educational project, we recommend not sharing sensitive personal information through our platform.
                      </p>
                    </div>
                  </section>

                  <section className="bg-gradient-to-br from-[#fffef0] via-[#612E37]/10 to-[#231650]/5 p-2 sm:p-4 rounded-2xl shadow-lg border border-[#612E37]/30">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                      <div className="bg-gradient-to-br from-[#231650] to-[#612E37] p-1 sm:p-2 rounded-xl shadow-lg">
                        <FileText className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-[#231650]">Third-Party Content</h2>
                    </div>
                    <div className="bg-white/60 backdrop-blur-sm p-2 sm:p-4 rounded-xl border border-[#612E37]/20">
                      <p className="text-[#612E37] leading-relaxed text-sm">
                        Our library contains materials sourced from various websites and platforms across the internet.
                        We are not responsible for the privacy practices of the original sources. Users should be aware
                        that the content comes from multiple third-party sources.
                      </p>
                    </div>
                  </section>
                </div>

                {/* Contact Us */}
                <section className="bg-gradient-to-br from-[#231650]/5 via-[#fffef0] to-[#FED172]/20 p-2 sm:p-4 rounded-2xl shadow-lg border border-[#231650]/20">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                    <div className="bg-gradient-to-br from-[#F3742B] to-[#231650] p-1 sm:p-2 rounded-xl shadow-lg">
                      <Shield className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-[#231650]">Contact Us</h2>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-2 sm:p-4 rounded-xl border border-[#231650]/10">
                    <p className="text-[#612E37] mb-2 sm:mb-4 text-sm leading-relaxed">
                      If you have any questions about this Privacy Policy, concerns about copyright, or need to report
                      content that should be removed, please contact us at:
                    </p>
                    <div className="grid gap-3">
                      <div className="bg-gradient-to-r from-[#FED172]/20 to-[#F3742B]/10 p-2 sm:p-4 rounded-xl border border-[#FED172]/30 shadow-sm">
                        <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                          <div className="flex items-center gap-2">
                            <span className="text-base">📧</span>
                            <div>
                              <p className="font-bold text-[#231650] text-sm">Email:</p>
                              <p className="text-[#612E37] text-sm">digitalsikhpustkalya@gmail.com</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-base">⚖️</span>
                            <div>
                              <p className="font-bold text-[#231650] text-sm">Copyright Issues:</p>
                              <p className="text-[#612E37] text-sm">digitalsikhpustkalya@gmail.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Footer */}
                <section className="text-center py-4 sm:py-6 border-t-2 border-[#FED172]/30">
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-xs sm:text-sm text-[#612E37] opacity-70">
                      Last updated: {new Date().toLocaleDateString()}
                    </p>
                    <p className="text-xs sm:text-sm text-[#612E37] opacity-70">
                      This privacy policy may be updated periodically to reflect changes in our practices.
                    </p>
                    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-2">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#F3742B]" />
                      <span className="text-xs sm:text-sm text-[#612E37] font-medium">
                        ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਡਿਜੀਟਲ ਸੰਗ੍ਰਹਿ
                      </span>
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#F3742B]" />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPage;