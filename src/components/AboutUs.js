import React from 'react';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-5xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          About Us
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Empowering students to explore, learn, and innovate with Google's cutting-edge technologies
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To empower students with cutting-edge Google technologies, foster a collaborative learning environment, and build innovative solutions that make a difference in our community and beyond.
            </p>
          </div>
          
          <div className="group bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To create a thriving developer ecosystem where students can explore emerging technologies, connect with industry experts, and transform ideas into impactful projects that shape the future.
            </p>
          </div>
          
          <div className="md:col-span-2 group bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">What We Do</h3>
            <p className="text-gray-300 leading-relaxed">
              We organize workshops, hackathons, and tech talks featuring Google technologies including Cloud Platform, Firebase, TensorFlow, Flutter, and more. Our chapter provides hands-on learning experiences, mentorship opportunities, and a platform for students to collaborate on real-world projects while building their technical skills and professional network.
            </p>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Technologies We Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Firebase', 'TensorFlow', 'Flutter', 'Google Cloud', 'Android', 'Kubernetes'].map((tech) => (
              <div key={tech} className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;