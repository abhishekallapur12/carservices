
import React from 'react';
import { PRODUCTS } from '../constants';

const ProductsGrid: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Featured Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our comprehensive range of high-performance machinery designed for 
            accuracy, efficiency, and long-term reliability.
          </p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-blue-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <ul className="space-y-1 mb-6">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-xs text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 bg-slate-900 text-white rounded-lg hover:bg-blue-900 transition-colors text-sm font-semibold">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;
