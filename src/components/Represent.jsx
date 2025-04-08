import target from '../assets/target.png';
import search from '../assets/search.png';

const Represent = () => {
  return (
    <div className="bg-[#030517] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Header */}
      <h1 className="text-4xl sm:text-4xl font-bold text-center mb-4">What we Represent</h1>
      <p className="text-center text-gray-400 text-lg mt-2">
        Our relentless pursuit of excellence is the driving force
      </p>
      <p className="text-center text-gray-400 text-lg mb-15">behind our success</p>

      {/* Description */}
      <div className="text-gray-400 text-center space-y-2 mb-28 max-w-5xl mx-auto text-base sm:text-lg leading-relaxed px-2">
        <h3>
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence is the driving force
        </h3>
        <h3>
          behind our success. Excellence is our legacy, and we are proud to carry it forward. Watch 
        </h3>
        <h3>
          the video to see how we are innovating to keep businesses on top of their games.
        </h3>
      </div>

      {/* Vision & Mission Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="group relative bg-gradient-to-r from-[#010207] to-blue-950 rounded-2xl p-10 shadow-xl text-center transition-all duration-500 hover:scale-105 overflow-hidden">
          {/* Hover Light Effect */}
          <div className="absolute inset-0 z-0 rounded-2xl bg-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>

          <img src={search} alt="Vision" className="w-60 h-60 mx-auto mb-6 object-contain z-10 relative" />
          <h3 className="text-4xl text-left font-bold mb-3 z-10 relative">Our Vision</h3>
          <p className="text-gray-200 text-left z-10 relative">To be the trusted partner for businesses seeking to</p>
          <p className="text-gray-200 text-left z-10 relative">leverage technology to improve decision-making,</p>
          <p className="text-gray-200 text-left z-10 relative">unlock new opportunities, and achieve</p>
          <p className="text-gray-200 text-left z-10 relative">transformative growth</p>
        </div>

        {/* Mission */}
        <div className="group relative bg-gradient-to-r from-[#010207] to-blue-950 rounded-2xl p-10 shadow-xl text-center transition-all duration-500 hover:scale-105 overflow-hidden">
          {/* Hover Light Effect */}
          <div className="absolute inset-0 z-0 rounded-2xl bg-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>

          <img src={target} alt="Mission" className="w-60 h-60 mx-auto mb-6 object-contain z-10 relative" />
          <h3 className="text-4xl text-left font-bold mb-3 z-10 relative">Our Mission</h3>
          <p className="text-gray-200 text-left z-10 relative">We bridge the gap between technology and</p>
          <p className="text-gray-200 text-left z-10 relative">business, delivering customized ICT solutions that</p>
          <p className="text-gray-200 text-left z-10 relative">drive efficiency, growth, and competitive</p>
          <p className="text-gray-200 text-left z-10 relative">advantage.</p>
        </div>
      </div>
    </div>
  );
};

export default Represent;
