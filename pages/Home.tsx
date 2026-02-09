
import React from 'react';
import Hero from '../components/Hero';
import { PageId } from '../types';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      
      {/* Featured Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-black text-blue-900 mb-2">15+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-blue-900 mb-2">500+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Installations</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-blue-900 mb-2">200+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-black text-blue-900 mb-2">24/7</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Advantage */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Leading the Industry with <span className="text-red-500">Unmatched Expertise</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We provide end-to-end industrial solutions that empower manufacturers to achieve 
              higher precision, faster cycle times, and better return on investment.
            </p>
            <div className="space-y-4">
              {[
                'Global Standard Machinery',
                'Advanced Control Systems',
                'Precision Engineering Support',
                'Ready-to-Ship Spares'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-bold">✓</div>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => onNavigate('about')}
              className="mt-12 px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
            >
              Learn More About Us
            </button>
          </div>
          <div className="flex-1 relative">
            <img 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl shadow-2xl border-4 border-white/10"
              alt="Industrial Plant"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600 rounded-full flex flex-col items-center justify-center text-center p-4 transform rotate-12 shadow-xl">
              <span className="text-3xl font-black">100%</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter leading-none">Quality Assurance</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
