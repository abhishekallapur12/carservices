
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in slide-in-from-right duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6">Expert Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            We provide a comprehensive ecosystem of support to ensure your machines operate at peak efficiency for years to come.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, i) => (
            <div 
              key={i} 
              className={`flex flex-col md:flex-row gap-12 items-center p-8 md:p-12 rounded-3xl border border-slate-100 ${
                i % 2 === 1 ? 'bg-slate-50 flex-row-reverse' : 'bg-white'
              }`}
            >
              <div className="flex-1">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.details?.map((detail, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-10 px-8 py-3 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-800 transition-all">
                  Book a Consultation
                </button>
              </div>
              <div className="flex-1 w-full">
                <img 
                  src={`https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                  alt={service.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
