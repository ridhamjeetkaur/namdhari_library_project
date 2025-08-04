import React from 'react';
import { Book, Search, Download, Eye, Globe, Star, ChevronRight, FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-400/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 rounded-full text-sm font-medium mb-4 sm:mb-6 shadow-md">
                <Star className="w-4 h-4 mr-2 text-yellow-600" />
                ਪੰਜਾਬੀ ਸਾਹਿਤ ਦਾ ਖਜ਼ਾਨਾ
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4 text-yellow-700">ਪੰਜਾਬੀ ਕਿਤਾਬਾਂ ਦਾ</span>
              <span className="bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                Digital Sikh Pustkalya
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Discover thousands of Punjabi books, sacred texts, and literature. 
              <span className="block mt-2 font-semibold text-yellow-700">View online or download for offline reading</span>
              on any device.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
             
              <Link to="/main-content"><button className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg font-bold hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center">
                <Eye className="w-5 h-5 mr-2" />
                Explore Library
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-orange-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-yellow-300 rounded-full opacity-50 animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              <span className="block text-yellow-600 mb-2">ਪੰਜਾਬੀ Books</span>
              At Your Fingertips
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto px-4 sm:px-0">
              Access, read, and download Punjabi literature anytime, anywhere. 
              Optimized for all devices with seamless reading experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Eye,
                title: "Online Reading",
                description: "Read books directly in your browser with our beautiful, responsive reader interface.",
                highlight: "View Online"
              },
              {
                icon: Download,
                title: "Download Books",
                description: "Download any book for offline reading. Keep your favorite Punjabi literature with you always.",
                highlight: "Download PDF"
              },
              
             
              {
                icon: Search,
                title: "Smart Search",
                description: "Find books by title, author, or content. Search in Punjabi, Hindi, or English languages.",
                highlight: "Multi-language"
              },
              {
                icon: Book,
                title: "Vast Collection",
                description: "Thousands of Punjabi books including religious texts, poetry, novels, and historical literature.",
                highlight: "1000+ Books"
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-yellow-100">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm bg-gradient-to-r from-yellow-200 to-orange-200 text-yellow-800 px-2 sm:px-3 py-1 rounded-full font-medium shadow-sm">
                    {feature.highlight}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-yellow-500 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="block mb-2">ਕਿਉਂ ਬਣਾਇਆ ਗਿਆ</span>
                Digital Sikh Library?
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed opacity-95">
                <p>
                  ਪੰਜਾਬੀ ਸਾਹਿਤ ਅਤੇ ਧਰਮਿਕ ਗ੍ਰੰਥਾਂ ਨੂੰ ਡਿਜੀਟਲ ਰੂਪ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਰੱਖਣ ਅਤੇ 
                  ਦੁਨੀਆ ਭਰ ਦੇ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚਾਉਣ ਲਈ।
                </p>
                <p>
                  To make Punjabi literature accessible to everyone, everywhere. Whether you're 
                  at home, traveling, or living abroad - your spiritual and cultural texts 
                  should always be within reach.
                </p>
                <p>
                  We believe that preserving and sharing knowledge is a sacred duty. This platform 
                  bridges the gap between traditional books and modern technology, ensuring our 
                  rich literary heritage survives for future generations.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 w-full max-w-md shadow-2xl">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
                  <div className="bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur border border-white/10">
                    <FileText className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-3 sm:mb-4 text-white" />
                    <div className="text-xl sm:text-2xl font-bold">500+</div>
                    <div className="text-xs sm:text-sm opacity-80">ਪੰਜਾਬੀ Books</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur border border-white/10">
                    <Eye className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-3 sm:mb-4 text-white" />
                    <div className="text-xl sm:text-2xl font-bold">View</div>
                    <div className="text-xs sm:text-sm opacity-80">Online</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur border border-white/10">
                    <Download className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-3 sm:mb-4 text-white" />
                    <div className="text-xl sm:text-2xl font-bold">Free</div>
                    <div className="text-xs sm:text-sm opacity-80">Download</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur border border-white/10">
                    <Globe className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-3 sm:mb-4 text-white" />
                    <div className="text-xl sm:text-2xl font-bold">24/7</div>
                    <div className="text-xs sm:text-sm opacity-80">Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Showcase */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Perfect on Every Device
            </h2>
            
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center group">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-yellow-100">
                <Download className="w-12 sm:w-16 h-12 sm:h-16 text-yellow-700 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Offline Access</h3>
                <p className="text-gray-600 text-sm sm:text-base">Download books to read offline on any device, anytime, anywhere without internet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-yellow-200">
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-md">
              <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-700" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Important Notice</h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              All Punjabi books and texts available in this digital library are the intellectual 
              property of their respective authors and publishers. This platform serves solely 
              as a repository for educational and spiritual purposes.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              <strong className="text-yellow-800">ਕਿਤਾਬਾਂ ਗਿਆਨ ਦਾ ਇੱਕੋ ਸਰੋਤ ਹਨ</strong> - Books are the only source of knowledge 
              and belong to their original authors. This website does not claim ownership of any 
              content and exists purely to facilitate access to Punjabi literature for learning 
              and cultural preservation.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;