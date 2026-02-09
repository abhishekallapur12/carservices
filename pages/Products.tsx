
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 animate-in slide-in-from-right duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6">Product Catalog</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Explore our diverse range of high-performance industrial machinery designed for the modern workshop.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? 'bg-blue-900 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 bg-red-600 text-white text-[10px] uppercase font-black px-3 py-1 rounded-full shadow-lg">
                  {product.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {product.description}
                </p>
                <div className="space-y-3 mb-8">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-2 rounded-lg">
                      <span className="w-1.5 h-1.5 bg-blue-900 rounded-full"></span>
                      {spec}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 bg-slate-900 text-white rounded-xl hover:bg-red-600 transition-all font-bold shadow-lg hover:shadow-red-500/20">
                  Request Technical Spec
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
