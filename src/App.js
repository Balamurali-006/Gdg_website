import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Members from './components/Members';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('home');

  const navigate = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch(currentRoute) {
      case 'home':
        return <Home navigate={navigate} />;
      case 'about':
        return <AboutUs />;
      case 'members':
        return <Members />;
      case 'contact':
        return <ContactUs />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Navigation currentRoute={currentRoute} navigate={navigate} />
      <main className="relative z-10">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;