
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import { PageId } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle browser back/forward buttons with hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'about', 'products', 'services', 'clients', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Init on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={handlePageChange} />;
      case 'about': return <About />;
      case 'products': return <Products />;
      case 'services': return <Services />;
      case 'clients': return <Clients />;
      case 'contact': return <Contact />;
      default: return <Home onNavigate={handlePageChange} />;
    }
  };

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      
      <main>
        {renderPage()}
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;
