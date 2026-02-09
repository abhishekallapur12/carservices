
import React from 'react';

const Clients: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in slide-in-from-right duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6">Our Valued Clients</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are proud to partner with industry leaders in Aerospace, Automotive, Medical, and General Engineering sectors.
          </p>
        </div>

        {/* Categories of industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { name: 'Aerospace', count: '45+', icon: '✈️' },
            { name: 'Automotive', count: '120+', icon: '🚗' },
            { name: 'Medical', count: '30+', icon: '🔬' },
            { name: 'Energy', count: '25+', icon: '⚡' }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-3xl text-center hover:bg-blue-900 hover:text-white transition-all group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-2xl font-black mb-1">{item.count}</h3>
              <p className="text-sm font-bold opacity-60 uppercase tracking-widest">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Logo Wall */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           {['BOSCH', 'TOYOTA', 'HAL', 'TATA', 'ISRO', 'HONDA', 'L&T', 'BEL', 'ABB', 'SIEMENS'].map(logo => (
             <div key={logo} className="text-3xl font-black text-slate-900 text-center select-none">{logo}</div>
           ))}
        </div>

        {/* Testimonial */}
        <div className="mt-32 bg-red-600 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-10 left-10 text-9xl font-serif opacity-20">"</div>
          <div className="relative z-10 max-w-3xl">
            <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
              "AMP Tech has been our reliable partner for over a decade. Their technical expertise and prompt service response have been instrumental in our production growth."
            </p>
            <div>
              <p className="font-black text-xl">Technical Director</p>
              <p className="text-red-100">Leading Automotive Tier-1 Supplier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
