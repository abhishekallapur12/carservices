
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 animate-in slide-in-from-right duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-12">
              Have a technical query or need a quote? Our team of experts is ready to assist you.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-2xl">📍</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Headquarters</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Plot No. 42, 2nd Phase, Peenya Industrial Area,<br />
                    Bangalore, Karnataka - 560058, India
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-2xl">📞</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600">+91 80 1234 5678 / +91 98450 12345</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0 text-2xl">✉️</div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Support</h4>
                  <p className="text-slate-600">info@amptech.co.in / sales@amptech.co.in</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-blue-900 text-white rounded-3xl">
              <h4 className="text-xl font-bold mb-4">Business Hours</h4>
              <div className="space-y-2 text-blue-100 text-sm">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="font-bold">9:00 AM - 6:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-bold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-50">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">Company Name</label>
                  <input type="text" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none" placeholder="Acme Corp" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Inquiry Type</label>
                <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none appearance-none">
                  <option>Machine Purchase</option>
                  <option>AMC / Service</option>
                  <option>Spare Parts</option>
                  <option>Retrofitting</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Your Message</label>
                <textarea className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-900 outline-none h-32" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button className="w-full py-4 bg-red-600 text-white rounded-xl font-black text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/30">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
