import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-2xl mx-auto z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Have questions? We'd love to hear from you. Send us a message!
        </p>
        
        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 hover:border-purple-400/40 transition-all">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white transition-all placeholder-gray-500"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white transition-all placeholder-gray-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 text-white transition-all resize-none placeholder-gray-500"
                placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-purple-500/30">
            <div className="flex items-center justify-center space-x-2 text-gray-300 mb-6">
              <Mail size={20} className="text-cyan-400" />
              <span>gdg@college.edu</span>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-blue-500/10 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-purple-500/10 text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 transition-all"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;