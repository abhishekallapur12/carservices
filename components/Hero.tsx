
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Pioneering <span className="text-red-500">Precision</span> in Industrial Automation
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
            Leading manufacturers and distributors of high-end CNC machines, 
            Wire Cut EDM, and cutting-edge industrial robotics solutions across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-lg text-center"
            >
              Explore Products
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg transition-all text-center"
            >
              Request a Quote
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple visual placeholders for certifications */}
             <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-[10px] uppercase tracking-widest">9001:2015</div>
             </div>
             <div className="h-8 w-px bg-white/30"></div>
             <div className="flex flex-col items-center">
                <div className="text-2xl font-bold">CE</div>
                <div className="text-[10px] uppercase tracking-widest">Certified</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
