
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in slide-in-from-right duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6">Our Legacy & Mission</h1>
          <div className="w-24 h-2 bg-red-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            AMP Tech (A M P Technologies) has been at the forefront of the machine tool industry since its inception, 
            providing cutting-edge technology and exceptional service to manufacturers across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Journey of Excellence</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Founded in Bangalore, India's technical hub, we started as a small service unit. Today, we represent some of the world's most prestigious machinery brands, offering a portfolio that spans from basic CNC lathes to advanced 5-axis machining centers and complex robotic cells.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our core strength lies in our deep technical understanding of the manufacturing process. We don't just sell boxes; we sell solutions that help our customers grow.
            </p>
            <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-red-600">
              <h4 className="text-xl font-bold text-blue-900 mb-2">Our Vision</h4>
              <p className="text-slate-700 italic">"To be the most preferred technology partner for the Indian manufacturing industry by delivering innovative and reliable solutions."</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl shadow-2xl"
              alt="Engineering"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Quality First', desc: 'We never compromise on the quality of our machines or our service.', icon: '🏆' },
            { title: 'Innovation', desc: 'Staying ahead of the curve with the latest industry 4.0 solutions.', icon: '🚀' },
            { title: 'Customer Success', desc: 'Our success is measured by the growth of our clients.', icon: '🤝' }
          ].map((value, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 shadow-sm rounded-2xl hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
