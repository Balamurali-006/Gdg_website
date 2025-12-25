import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Members = () => {
  const teamMembers = [
    { name: 'Alex Johnson', role: 'Lead', image: '👨‍💻', linkedin: '#', github: '#' },
    { name: 'Sarah Chen', role: 'Co-Lead', image: '👩‍💻', linkedin: '#', github: '#' },
    { name: 'Mike Rodriguez', role: 'Technical Lead', image: '👨‍💼', linkedin: '#', github: '#' },
    { name: 'Emma Davis', role: 'Design Lead', image: '👩‍🎨', linkedin: '#', github: '#' },
    { name: 'James Wilson', role: 'Event Coordinator', image: '👨‍🏫', linkedin: '#', github: '#' },
    { name: 'Lisa Anderson', role: 'Community Manager', image: '👩‍💼', linkedin: '#', github: '#' },
    { name: 'David Kim', role: 'Marketing Lead', image: '👨‍💼', linkedin: '#', github: '#' },
    { name: 'Rachel Green', role: 'Content Writer', image: '👩‍💻', linkedin: '#', github: '#' },
    { name: 'Tom Harris', role: 'Developer Advocate', image: '👨‍🏫', linkedin: '#', github: '#' }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-6xl mx-auto z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Our Team
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Meet the passionate individuals driving innovation and community growth
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105"
            >
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform">
                {member.image}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-white">{member.name}</h3>
              <p className="text-cyan-400 text-center mb-4 text-sm">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.linkedin}
                  className="p-2 rounded-lg bg-blue-500/10 text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.github}
                  className="p-2 rounded-lg bg-purple-500/10 text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;