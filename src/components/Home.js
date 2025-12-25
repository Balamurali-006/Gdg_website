import React from 'react';

const Home = ({ navigate }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-sm text-cyan-400 mb-6">
            Welcome to GDG College Chapter
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
          Google Developers Group
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">College Chapter</p>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Build. Learn. Innovate with Google Technologies
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('contact')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">Join the Community</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button
            onClick={() => navigate('members')}
            className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:border-cyan-400"
          >
            View Team
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-sm text-gray-400">Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-sm text-gray-400">Events</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">20+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;