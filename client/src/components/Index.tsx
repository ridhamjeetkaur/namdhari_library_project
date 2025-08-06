import React from 'react';
import { Book, Search, Download, Eye, Globe, Star, ChevronRight, FileText, Heart, Sparkles, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffef0] via-[#FED172]/10 to-[#F3742B]/5 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#F3742B]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#B83A14]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#612E37]/3 to-[#231650]/3 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 xl:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Hero Badge */}
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#FED172]/20 via-[#F3742B]/10 to-[#B83A14]/20 backdrop-blur-sm text-[#612E37] rounded-full text-sm sm:text-base font-bold mb-4 sm:mb-6 shadow-lg border border-[#FED172]/30">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#F3742B]" />
                ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਖਜ਼ਾਨਾ
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2 text-[#F3742B]" />
              </div>
            </div>

            {/* Hero Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#231650] mb-6 sm:mb-8 leading-tight">
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-2 sm:mb-4 text-[#612E37] font-medium">
                ਪੰਜਾਬੀ ਕਿਤਾਬਾਂ ਦਾ
              </span>
              <span className="bg-gradient-to-r from-[#F3742B] via-[#B83A14] to-[#612E37] bg-clip-text text-transparent">
                ਡਿਜੀਟਲ ਸਿੱਖ ਪੁਸਤਕਾਲਿਆ 
              </span>
            </h1>

            {/* Hero Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#612E37] mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed px-4 sm:px-0">
               ਹਜ਼ਾਰਾਂ ਪੰਜਾਬੀ ਕਿਤਾਬਾਂ, ਪਵਿੱਤਰ ਗ੍ਰੰਥਾਂ ਅਤੇ ਸਾਹਿਤ ਦੀ ਖੋਜ ਕਰੋ।
              <span className="block mt-2 sm:mt-3 font-bold text-[#231650] flex items-center justify-center gap-2">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-[#F3742B]" />
ਔਨਲਾਈਨ ਦੇਖੋ ਜਾਂ ਔਫਲਾਈਨ ਪੜ੍ਹਨ ਲਈ ਡਾਊਨਲੋਡ ਕਰੋ                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-[#F3742B]" />
              </span>
              ਕਿਸੇ ਵੀ ਡਿਵਾਈਸ 'ਤੇ।
            </p>

            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
              <Link to="/main-content">
                <button className="w-full sm:w-auto bg-gradient-to-r from-[#F3742B] via-[#B83A14] to-[#612E37] text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl text-lg sm:text-xl font-bold hover:from-[#B83A14] hover:via-[#612E37] hover:to-[#231650] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3 min-w-[280px] sm:min-w-[320px]">
                  <Eye className="w-6 h-6" />
                  Explore Library
                  <ChevronRight className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-8 sm:top-16 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-[#FED172] to-[#F3742B] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-8 sm:bottom-16 right-4 sm:right-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-[#F3742B] to-[#B83A14] rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-[#B83A14] to-[#612E37] rounded-full opacity-25 animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FED172]/30 to-[#F3742B]/20 rounded-full mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 text-[#F3742B] mr-2" />
              <span className="text-[#612E37] font-bold text-sm">Features</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#231650] mb-4 sm:mb-6">
              <span className="block text-[#F3742B] mb-2 sm:mb-3">ਪੰਜਾਬੀ Books</span>
              At Your Fingertips
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#612E37] max-w-4xl mx-auto px-4 sm:px-0 leading-relaxed">
              Access, read, and download Punjabi literature anytime, anywhere. 
              Optimized for all devices with seamless reading experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Eye,
                title: "ਔਨਲਾਈਨ ਪੜ੍ਹਨਾ (Online Reading)",
                description: "Read books directly in your browser with our beautiful, responsive reader interface.",
                highlight: "View Online",
                color: "from-[#F3742B] to-[#B83A14]",
                bgColor: "from-[#FED172]/20 to-[#F3742B]/10"
              },
              {
                icon: Download,
                title: "ਕਿਤਾਬਾਂ ਡਾਊਨਲੋਡ ਕਰੋ (Download Books)",
                description: "Download any book for offline reading. Keep your favorite Punjabi literature with you always.",
                highlight: "Download PDF",
                color: "from-[#B83A14] to-[#612E37]",
                bgColor: "from-[#F3742B]/20 to-[#B83A14]/10"
              },
             
              {
                icon: Book,
                title: "ਵਿਸ਼ਾਲ ਸੰਗ੍ਰਹਿ (Vast Collection)",
                description: "Thousands of Punjabi books including religious texts, poetry, novels, and historical literature.",
                highlight: "500+ Books",
                color: "from-[#231650] to-[#F3742B]",
                bgColor: "from-[#612E37]/20 to-[#FED172]/20"
              }
            ].map((feature, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300">
                <div className={`bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#FED172]/30 shadow-lg hover:shadow-xl h-full`}>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm bg-white/80 backdrop-blur-sm text-[#612E37] px-2 sm:px-3 py-1 rounded-full font-bold shadow-sm border border-[#FED172]/20">
                      {feature.highlight}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#231650] mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-[#612E37] leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#F3742B] via-[#B83A14] to-[#612E37] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/20"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-white/30"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-white/10"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 sm:mb-8">
                <Heart className="w-4 h-4 mr-2" />
                <span className="font-bold text-sm">Our Mission</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="block mb-2 sm:mb-3">ਕਿਉਂ ਬਣਾਇਆ ਗਿਆ</span>
                Digital Sikh Library?
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed opacity-95">
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20">
                  <p className="flex items-start gap-3">
                    <span className="text-[#FED172] text-xl flex-shrink-0">📚</span>
                    ਪੰਜਾਬੀ ਸਾਹਿਤ ਅਤੇ ਧਰਮਿਕ ਗ੍ਰੰਥਾਂ ਨੂੰ ਡਿਜੀਟਲ ਰੂਪ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਰੱਖਣ ਅਤੇ 
                    ਦੁਨੀਆ ਭਰ ਦੇ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚਾਉਣ ਲਈ।
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20">
                  <p className="flex items-start gap-3">
                    <span className="text-[#FED172] text-xl flex-shrink-0">🌍</span>
                    To make Punjabi literature accessible to everyone, everywhere. Whether you're 
                    at home, traveling, or living abroad - your spiritual and cultural texts 
                    should always be within reach.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20">
                  <p className="flex items-start gap-3">
                    <span className="text-[#FED172] text-xl flex-shrink-0">🛡️</span>
                    We believe that preserving and sharing knowledge is a sacred duty. This platform 
                    bridges the gap between traditional books and modern technology, ensuring our 
                    rich literary heritage survives for future generations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 w-full max-w-md shadow-2xl">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
                  {[
                    { icon: FileText, value: "500+", label: "ਪੰਜਾਬੀ Books", color: "from-[#FED172] to-white" },
                    { icon: Eye, value: "View", label: "Online", color: "from-white to-[#FED172]" },
                    { icon: Download, value: "Free", label: "Download", color: "from-[#FED172] to-white" },
                    { icon: Globe, value: "24/7", label: "Access", color: "from-white to-[#FED172]" }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur border border-white/10 hover:scale-105 transition-transform duration-300">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${stat.color} rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-lg`}>
                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#612E37]" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs sm:text-sm opacity-80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#fffef0] via-[#FED172]/10 to-[#F3742B]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#231650] mb-4 sm:mb-6">
              Perfect on Every Device
            </h2>
            <p className="text-[#612E37] text-base sm:text-lg max-w-3xl mx-auto">
              Seamlessly designed for desktop, tablet, and mobile devices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Download,
                title: "Offline Access",
                description: "Download books to read offline on any device, anytime, anywhere without internet.",
                color: "from-[#F3742B] to-[#B83A14]"
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Built by the community, for the community. Contribute and help grow our digital library.",
                color: "from-[#B83A14] to-[#612E37]"
              },
              {
                icon: Shield,
                title: "Safe & Secure",
                description: "Your privacy matters. We don't track reading habits or store personal data.",
                color: "from-[#612E37] to-[#231650]"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl border border-[#FED172]/30 h-full">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#231650] mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-[#612E37] text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 sm:py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#fffef0] via-[#FED172]/20 to-[#F3742B]/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border-2 border-[#FED172]/30">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#F3742B] to-[#B83A14] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
              <Sparkles className="w-5 h-5 text-[#F3742B]" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#231650]">Important Notice</h3>
              <Sparkles className="w-5 h-5 text-[#F3742B]" />
            </div>
            
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#FED172]/20">
                <p className="text-[#612E37] mb-3">
                  All Punjabi books and texts available in this digital library are the intellectual 
                  property of their respective authors and publishers. This platform serves solely 
                  as a repository for educational and spiritual purposes.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#FED172]/20">
                <p className="text-[#612E37]">
                  <strong className="text-[#231650] text-base sm:text-lg">ਕਿਤਾਬਾਂ ਗਿਆਨ ਦਾ ਇੱਕੋ ਸਰੋਤ ਹਨ</strong> - Books are the only source of knowledge 
                  and belong to their original authors. This website does not claim ownership of any 
                  content and exists purely to facilitate access to Punjabi literature for learning 
                  and cultural preservation.
                </p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8">
              <Link to="/contact">
                <button className="bg-gradient-to-r from-[#F3742B] to-[#B83A14] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:from-[#B83A14] hover:to-[#612E37] transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Contact Us for Concerns
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;