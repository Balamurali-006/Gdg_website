import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ currentRoute, navigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (route) => {
    navigate(route);
    setMobileMenuOpen(false);
  };

  const routes = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About Us' },
    { path: 'members', label: 'Members' },
    { path: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30 shadow-lg shadow-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                GDG College
              </div>
              <div className="text-xs text-gray-400">Developer Community</div>
            </div>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {routes.map((route) => (
              <button
                key={route.path}
                onClick={() => handleNavClick(route.path)}
                className={`transition-all duration-300 relative py-2 px-1 ${
                  currentRoute === route.path ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                {route.label}
                {currentRoute === route.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-purple-500/20 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-2">
            {routes.map((route) => (
              <button
                key={route.path}
                onClick={() => handleNavClick(route.path)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${
                  currentRoute === route.path 
                    ? 'bg-purple-500/20 text-cyan-400' 
                    : 'text-gray-300 hover:bg-purple-500/10 hover:text-white'
                }`}
              >
                {route.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;