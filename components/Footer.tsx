
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">
              AMP<span className="text-red-500">TECH</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Leading the way in industrial automation and CNC technology across India. 
              Delivering precision, reliability, and innovative engineering solutions.
            </p>
            <div className="flex gap-4">
              {['FB', 'TW', 'LI', 'IG'].map(s => (
                <div key={s} className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors cursor-pointer text-xs font-bold">
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-red-500 transition-colors">Products</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li>CNC Machining</li>
              <li>Wire Cut EDM</li>
              <li>Laser Cutting</li>
              <li>Automation Robotics</li>
              <li>Machine Retrofitting</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">A:</span>
                <span>Industrial Area, Bangalore,<br />Karnataka - 560058</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">P:</span>
                <span>+91 80 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold">E:</span>
                <span>info@amptech.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} A M P Technologies. All Rights Reserved. Designed for Industrial Excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
